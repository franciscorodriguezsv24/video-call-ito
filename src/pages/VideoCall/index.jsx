import React, { useEffect, useState } from 'react';
import { SideBar } from '../../components/SideBar';
import './VideoCall.css';
import { CiUser } from 'react-icons/ci';
import { MdOutlineCallEnd } from "react-icons/md";

const VideoCall = () => {
  const [stream, setStream] = useState();
  const [called, setCalled] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [camera, setCamera] = useState(false)


  useEffect(() => {

    setIsPopupVisible(true);
  }, []);


  const toggleCamera = () => {
    setCamera(!camera)
  };

  let UserVideo;
  if (stream) {
    UserVideo =
    <div className="w-50 border border-success rounded d-flex flex-column">
      <div className='w-100  border border-success rounded d-flex flex-column align-items-center justify-content-center'>
            <div className='call-icon border-5 border border-success rounded-circle d-flex flex-column align-items-center p-2'>
              <CiUser className='text-success' size={350} />
            </div>
            <h1 className='text-success'>{camera ? "Camera On" : "Camera off"}</h1>
          </div>
      <button onClick={toggleCamera} className="btn btn-success text-light border rounded-bottom">
        {camera ? 'Turn Off' : 'Turn On'}
      </button>
    </div>;
  }

  const handleAcceptCall = () => {
    setIsPopupVisible(false);
    setCalled(true);
    setStream(true);
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

        <a className={stream ? 'mt-5 btn btn-danger rounded-circle text-light' : 'd-none'} onClick={handleFinishCall}><MdOutlineCallEnd size={60}/></a>
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

