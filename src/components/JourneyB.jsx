import { useState } from 'react';

const JourneyB = ({ tasks }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`relative ${expanded ? 'w-[392px]' : 'w-[132px]'} h-[692px] bg-white rounded-tr-3xl rounded-br-3xl shadow-right overflow-hidden`}>
      <div className={`bg-black ${expanded ? 'w-[392px]' : 'w-[132px]'} h-[50px] rounded-tr-xl rounded-br-xl flex items-center p-2 justify-end`} onClick={handleExpand}>
        <div className="board-title flex items-center justify-center w-full">
          {expanded && (
            <h1 className='text-white font-poppins font-semibold'>Journey Board</h1>
          )}
        </div>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
          <img src='https://i.ibb.co/nDt7G64/arrowicon.png' alt="Arrow Icon" className={`transform ${expanded ? 'rotate-180' : 'rotate-0'}`} />
        </div>
      </div>  
      <div className="h-full white-div flex justify-center p-2">
        {expanded ? (
          <div>
            <h1 className="text-xl font-bold mb-4">{tasks[0].task_title}</h1>
            <ul className="list-disc ml-5">
              <li>
                <h2 className="font-semibold">{tasks[0].assets[0].asset_title}</h2>
              </li>
              <li>
                <h2 className="font-semibold">{tasks[0].assets[1].asset_title}</h2>
              </li>
              <li>
                <h2 className="font-semibold">{tasks[0].assets[2].asset_title}</h2>
              </li>
            </ul>
          </div>
        ) : (
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
            1
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyB;
