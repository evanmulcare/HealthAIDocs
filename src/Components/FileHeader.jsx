import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const FileHeader = ({ title, nextLink }) => {
  const navigate = useNavigate();

  return (
    <div className='px-2 flex flex-col md:flex-row justify-between border-b'>
      <button
        onClick={() => ""}
        className="flex items-center px-3 py-2 mb-2 md:mb-0"
      >
        <span className="text-sm inline-flex text-gray-600 ">Docs <MdArrowForwardIos className='text-gray-600 text-xs mt-1 ml-1 mr-1' /><span className='text-gray-800'>{title}</span></span>
      </button>

      <button
        onClick={() => navigate(nextLink)}
        className=" flex items-center bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring rounded-lg px-3 py-2 transition duration-300 mb-2"
      >
        <span className="text-sm">Next</span>
        <AiOutlineArrowRight className="ml-2" size={20} />
      </button>
    </div>
  );
};

export default FileHeader;
