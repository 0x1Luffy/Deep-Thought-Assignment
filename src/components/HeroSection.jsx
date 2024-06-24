import { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import Card2 from './Card2';
import NoticeB from './NoticeB';
import JourneyB from '../components/JourneyB';

const HeroSection = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjectData();
  }, []);

  return (
    <>
      <div className="relative grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5">
          {projectData && (
            <JourneyB title={projectData.tasks} tasks={projectData.tasks} />
          )}
        </div>
        <div className="col-span-3">
          <div className="flex justify-between p-8 w-[85%] h-full">
            {projectData ? (
              <>
                <h1 className="font-poppins font-bold text-[28px] text-[#0029FF]">
                  {projectData.title}
                </h1>
                <Button btnName={'Submit Task'} />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="row-span-5 col-start-5">
          <NoticeB />
        </div>
        
        <div className="col-span-3 col-start-2 row-start-2">
          {projectData && (
            <div className="bg-[#E9ECEF] w-[1066px] h-[135px] top-[187px] left-[187px] rounded-[5px] p-5">
              <div className="top-[212] left-[214]">
                <h1 className="font-poppins font-bold text-[20px] leading-[30px] tracking-[2%]">
                  {projectData.tasks[0].task_title}
                </h1>
                <p className="font-poppins font-normal text-[14px] leading-[21px] tracking-[2%] pt-2">
                  {projectData.tasks[0].task_description}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row-span-3 col-start-2 row-start-3 -mr-32">
          <Card
            title={projectData ? projectData.tasks[0].assets[0].asset_title : ''}
            description={projectData ? projectData.tasks[0].assets[0].asset_description : ''}
            videoId={projectData ? projectData.tasks[0].assets[0].asset_content : ''}
          />
        </div>
        <div className="row-span-3 col-start-4 row-start-3 -ml-60">
          <Card2
            title={projectData ? projectData.tasks[0].assets[1].asset_title : ''}
            description={projectData ? projectData.tasks[0].assets[1].asset_description : ''}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 flex flex-col gap-2">
        <img src="https://i.ibb.co/dt0XSBt/Bluecircle.png" alt="" />
        <img src="https://i.ibb.co/dt0XSBt/Bluecircle.png" alt="" />
        <img src="https://i.ibb.co/dt0XSBt/Bluecircle.png" alt="" />
      </div>
    </>
  );
};

export default HeroSection;
