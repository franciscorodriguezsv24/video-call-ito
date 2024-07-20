import React, { useEffect, useRef, useState } from 'react';
import { SideBar } from '../../components/SideBar';
import './VideoCall.css';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const VideoCall = () => {
  const [yourId, setYourId] = useState('');
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
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
  }, []);

  function callPeer(id) {
    console.log('Calling peer:', id);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {
        iceServers: [
          {
            urls: 'stun:numb.viagenie.ca',
            username: 'sultan1640@gmail.com',
            credential: '98376683',
          },
          {
            urls: 'turn:numb.viagenie.ca',
            username: 'sultan1640@gmail.com',
            credential: '98376683',
          },
        ],
      },
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.current.emit('callUser', { userToCall: id, signalData: data, from: yourId });
    });

    peer.on('stream', (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on('callAccepted', (signal) => {
      console.log('Call accepted');
      setCallAccepted(true);
      peer.signal(signal);
    });
  }

  function acceptCall() {
    console.log('Call accepted');
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.current.emit('acceptCall', { signal: data, to: caller });
    });

    peer.on('stream', (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = <video ref={userVideo} autoPlay muted className="col-4" />;
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = <video ref={partnerVideo} autoPlay className="col-4" />;
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    );
  }

  return (
    <div className="row videoCall">
      <div className="col-1">
        <SideBar />
      </div>
      <div className="col-11 bg-info">
        <div className="row">
          {UserVideo}
          {PartnerVideo}
        </div>
        <div>
          {Object.keys(users).map((key) => {
            if (key === yourId) {
              return null;
            }
            return (
              <button key={key} onClick={() => callPeer(key)}>
                Call {key}
              </button>
            );
          })}
        </div>
        <div>{incomingCall}</div>
      </div>
    </div>
  );
};

export default VideoCall;
