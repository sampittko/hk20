import React from 'react';
import { navigate } from 'gatsby';

const UISwitcher = ({ activeUI }) => {
  return (
    <button onClick={() => {
      if (activeUI === 'back-office') {
        navigate('/employee/')
      }
      else {
        navigate("/back-office/dashboard/")
      }
    }} className="absolute bottom-0 left-0 bg-red-200 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full m-5">
      Switch UI
    </button>
  )
};

export default UISwitcher;