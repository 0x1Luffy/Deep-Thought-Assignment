import Button from "./Button";

const Card2 = ({ title, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '580px', width: '480px' }} >
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-center text-lg font-semibold bg-black text-center text-white p-4 rounded">
          <span className="px-2">{title}</span>
          <img src="https://i.ibb.co/7n5ThfC/Iicon.png" alt="" className="w-6 h-6" />
        </div>
        <div className="text-sm text-gray-600 mt-2 px-4 flex-grow overflow-hidden">
          <p>
            <span className="font-poppins font-[600] text-black">Description: </span>{description}
          </p>
          <div className="w-full h-full flex flex-col mt-4">
          <div className="text-lg font-semibold bg-gray-200 text-center text-black py-2 rounded">
            Thread A
          </div>
          <div className="flex justify-around mt-4">
            <div className="flex flex-col items-center">
              <label className="text-gray-700">Sub thread 1</label>
              <textarea className="border rounded p-2 mt-1" placeholder="Enter Text here"></textarea>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-700">Sub Interpretation 1</label>
              <textarea className="border rounded p-2 mt-1" placeholder="Enter Text here"></textarea>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <button className="text-gray-500"><i className="fas fa-lightbulb"></i></button>
            <button className="text-gray-500"><i className="fas fa-comments"></i></button>
            <button className="text-gray-500"><i className="fas fa-question-circle"></i></button>
            <button className="text-gray-500"><i className="fas fa-download"></i></button>
          </div>
          <div className="flex justify-around mt-4">
            <select className="border rounded p-2">
              <option>Select Categ</option>
            </select>
            <select className="border rounded p-2">
              <option>Select Proces</option>
            </select>
          </div>
          <div className="py-5 pl-5">
          <Button
            btnName={"+ Sub Thread"}
           />
          </div>
           
          <div className="flex flex-col mt-4">
            <label className="text-gray-700">Summary for Thread A</label>
            <textarea className="border rounded p-2 mt-1" placeholder="Enter Text Here"></textarea>
          </div>
        </div>
        </div>


        
      </div>
    </div>
  );
};

export default Card2;
