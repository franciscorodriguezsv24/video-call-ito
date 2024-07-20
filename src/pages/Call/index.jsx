import React, { useState, useEffect } from 'react';
import './Call.css';
import { SideBar } from '../../components/SideBar';
import { CiUser } from 'react-icons/ci';
import { MdAddIcCall } from 'react-icons/md';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { GiHamburgerMenu } from 'react-icons/gi';
import Timer from '../../components/Timer';

const Call = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setIsPopupVisible(true);
  }, []);

  const handleAcceptCall = () => {
    setIsPopupVisible(false);
    setIsActive(true);
  };

  const handleRejectCall = () => {
    setIsPopupVisible(false);
    setIsActive(false);
    setTime(0);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className='row call'>
      <div className='col-1'>
        <SideBar />
      </div>
      <div className='col-11 call-container pt-5'>
        <div className='w-50 d-flex flex-column justify-content-center align-items-center border-end border-success'>
          <h1 className='text-success'>AleRod</h1>
          <div className='call-icon border-5 border border-success rounded-circle d-flex flex-column align-items-center p-2'>
            <CiUser className='text-success' size={350} />
          </div>
          <div>
            <Timer isActive={isActive} time={time} setTime={setTime} />
          </div>
          <div className='d-flex flex-row justify-content-center gap-3'>
            <a className='btn btn-success text-light rounded-circle'>
              <HiMiniSpeakerWave size={50} />
            </a>
            <a className='btn btn-success text-light rounded-circle'>
              <GiHamburgerMenu size={50} />
            </a>
            <a className='btn btn-danger text-light rounded-circle' onClick={handleReset}>
              <MdAddIcCall size={50} />
            </a>
          </div>
        </div>
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

export default Call;
