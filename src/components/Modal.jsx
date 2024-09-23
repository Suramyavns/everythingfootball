// src/components/Modal.js
import React, { useState } from 'react';
import NavBar from './NavBar';

const Modal = ({ data, showModal, setShowModal }) => {
  if (!showModal) return null;
  const [content,setContent] = useState('')
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
            <div className='flex gap-3 items-center'>
                <img width={25} src={data.country_logo} alt={data.country_name} title={data.country_name} />
                <img width={20} src={data.league_logo} alt={data.league_name} title={data.league_name} />
                <h2 className="ws-bold text-xl font-semibold">{data.league_name}</h2>
            </div>
        <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            &#10005;
          </button>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <NavBar setCardContent={setContent} />
          <hr className='w-full mt-3' />
          <div className='w-full flex justify-center items-center h-36'>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
