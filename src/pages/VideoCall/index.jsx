import React, { useEffect, useRef, useState } from 'react';
import { SideBar } from '../../components/SideBar';
import './VideoCall.css';
import { io } from 'socket.io-client';
import { CiUser } from 'react-icons/ci';
import { MdOutlineCallEnd } from "react-icons/md";

const VideoCall = () => {
  const [stream, setStream] = useState();
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [called, setCalled] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const userVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect('/video-call');
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    socket.current.on('yourID', (id) => {
      console.log('Your ID:', id);
      setYourId(id);
    });

    socket.current.on('allUsers', (users) => {
      console.log('All users:', users);
      setUsers(users);
    });

    socket.current.on('hey', (data) => {
      console.log('Receiving call from:', data.from);
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    setIsPopupVisible(true);
  }, []);


  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setCameraEnabled(videoTrack.enabled);
    }
  };

  let UserVideo;
  if (stream) {
    UserVideo =
    <div className="w-50 border border-success rounded d-flex flex-column">
      <video ref={userVideo} autoPlay muted/>
      <button onClick={toggleCamera} className="btn btn-success text-light border rounded-bottom">
        {cameraEnabled ? 'Turn Camera Off' : 'Turn Camera On'}
      </button>
    </div>;
  }

  const handleAcceptCall = () => {
    setIsPopupVisible(false);
    setCalled(true)
  };

  const handleRejectCall = () => {
    setIsPopupVisible(false);
    setCalled(false)
  };

  const handleFinishCall = () => {
    setCalled(false);
  }

  return (
    <div className="row videoCall">
      <div className="col-1">
        <SideBar />
      </div>
      <div className="col-11 video-container pt-5 text-center">
        <div className="d-flex flex-row justify-content-center">
          {UserVideo}
          <div className={called ? 'w-50  border border-success rounded d-flex flex-column align-items-center justify-content-center' : 'd-none'}>
            <div className='call-icon border-5 border border-success rounded-circle d-flex flex-column align-items-center p-2'>
              <CiUser className='text-success' size={350} />
            </div>
            <h1 className='text-success'>Camera off</h1>
          </div>
        </div>

        <a className='mt-5 btn btn-danger rounded-circle text-light' onClick={handleFinishCall}><MdOutlineCallEnd size={60}/></a>
        {isPopupVisible && (
          <div className='popup'>
            <div className='popup-inner'>
              <h2>Incoming Call</h2>
              <p>John Doe is calling...</p>
              <button className='btn btn-success' onClick={handleAcceptCall}>Accept</button>
              <button className='btn btn-danger' onClick={handleRejectCall}>Reject</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCall;

