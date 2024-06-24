
const Card = ({ title, description, videoId }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '580px', width: '480px' }}>
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-center text-lg font-semibold bg-black text-center text-white p-4 rounded">
          <span className="px-2">{title}</span>
          <img src="https://i.ibb.co/7n5ThfC/Iicon.png" alt="" className="w-6 h-6" />
        </div>
        <div className="text-sm text-gray-600 mt-2 px-4 flex-grow overflow-auto">
          <p>
            <span className="font-poppins font-[600] text-black">Description: </span>
            {description}
          </p>
        </div>
        {videoId && (
          <div className="flex items-center justify-center">
            <iframe className="mb-36"
              width="100%"
              height="250"
              src={videoId}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
