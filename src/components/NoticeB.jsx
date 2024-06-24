import { useState } from 'react';

const NoticeB = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed right-0 top-0 h-full flex items-center justify-end">
      <div className="h-[394px] w-[95px] bg-white rounded-l-[30px] rounded-r-none flex items-center shadow-right">
        <div className="h-full w-[47.5px] bg-black flex flex-col justify-between items-center py-2 rounded-l-[30px]">
          <div className="">
            <button className="focus:outline-none" onClick={handleClose}>
              <img src="https://i.ibb.co/7n5mhbd/x-01.png" alt="X Logo" className="w-6 h-6" />
            </button>
          </div>
          <div className="h-full gap-5 flex text-white justify-center items-center transform rotate-90 ">
            <span>N</span>O<span>T</span>I<span>C</span>E
            <span>B</span>O<span>A</span>R<span>D</span>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default NoticeB;
