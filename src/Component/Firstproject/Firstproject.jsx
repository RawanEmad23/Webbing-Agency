
import img1 from "../../assets/imgs/529eb29390aaf54f18fe16c0c3891a38.png";
import img2 from "../../assets/imgs/ebf942a557ba8b988a95e1abf69e9867.png";
import img3 from "../../assets/imgs/7bc5be7f64544a6c2b01537c3b21eed0.png";
import img4 from "../../assets/imgs/cc32a3c80814a222666caea25d1716d7.png";
import { Link } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: 'AdilBaba',
    services: 'Mobile App, Website, Dashboard',
    description: 'This platform is Egypt’s leading digital marketplace, connecting businesses, suppliers, and consumers with B2B, B2C, and C2C services. It offers tools for inventory management, logistics, and secure payments, empowering local businesses to expand their reach and giving consumers access to diverse, locally-sourced products.',
    images: [img1, img2, img3, img4], // Add images in the desired order
  },
  {
    id: 2, // Change id to be unique
    title: 'AdilBaba 2',
    services: 'Mobile App, Website, Dashboard',
    description: 'This platform is Egypt’s leading digital marketplace, connecting businesses, suppliers, and consumers with B2B, B2C, and C2C services. It offers tools for inventory management, logistics, and secure payments, empowering local businesses to expand their reach and giving consumers access to diverse, locally-sourced products.',
    images: [img1, img2, img3, img4], // Add images in the desired order
  },
  {
    id: 2, // Change id to be unique
    title: 'AdilBaba 2',
    services: 'Mobile App, Website, Dashboard',
    description: 'This platform is Egypt’s leading digital marketplace, connecting businesses, suppliers, and consumers with B2B, B2C, and C2C services. It offers tools for inventory management, logistics, and secure payments, empowering local businesses to expand their reach and giving consumers access to diverse, locally-sourced products.',
    images: [img1, img2, img3, img4], // Add images in the desired order
  },
  // You can add more project objects here
];

export default function Firstproject() {
  return (
    <div className='bg-[#EFF6FF] '>
      <div className=" container mx-auto "> 
        <ul className=" flex justify-around text-[#b0a8a8] pt-5">
          
        <li className="text-[#1F7099] font-bold">
    <Link to="/all">All</Link>
  </li>
  <li>
    <Link to="/full-projects">Full Projects</Link>
  </li>
  <li>
    <Link to="/applications">Applications</Link>
  </li>
  <li>
    <Link to="/websites">Websites</Link>
  </li>
  <li>
    <Link to="/logos">Logos</Link>
  </li>
  <li>
    <Link to="/social-media">Social Media</Link>
  </li>
          
          </ul>
      </div>
  <div className='bg-[#EFF6FF] min-h-screen'>


      <div className='container mx-auto flex flex-col justify-center items-center min-h-full p-4 sm:p-8'>


        {projects.map((project) => (
          <div key={project.id} className='w-full p-4 sm:p-8 rounded-3xl bg-white shadow-[0_4px_15px_rgba(0,0,255,0.3)] flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mb-8'>
            
            {/* Left section for text */}
            <div className='w-full sm:w-1/2 pr-0 sm:pr-4'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-4'>{project.title}</h3>
              <p className='text-base sm:text-lg font-semibold mb-2'>{project.services}</p>
              <p className='text-blue-500 mb-4'>Services Offered: UI/UX Design, App Development, Website Development, Dashboard Development.</p>
              <p className='text-gray-600 text-sm sm:text-base'>{project.description}</p>
              <a href="#" className='text-blue-500 mt-4 underline block'>Show Full Project</a>
            </div>

            {/* Right section for images */}
            <div className='w-full sm:w-1/2 flex flex-col items-center'>
              <div className='flex flex-col sm:flex-row justify-between w-full mb-4 space-y-4 sm:space-y-0'>
                
                {/* Main Image */}
                <div className='w-full sm:w-[250px] h-auto sm:mr-8'>
                  <img className='w-full h-auto object-contain border border-black rounded-lg' src={project.images[0]} alt="Main image" />
                </div>

                {/* Side Images */}
                <div className='flex flex-col items-center'>
                  <div className='flex gap-4 mb-4'>
                    <img src={project.images[1]} className='w-[80px] sm:w-[90px] h-auto object-contain border border-black rounded-lg' alt="Image 2" />
                    <img src={project.images[2]} className='w-[80px] sm:w-[90px] h-auto mt-4 sm:mt-7 object-contain border border-black rounded-lg' alt="Image 3" />
                    <img src={project.images[3]} className='w-[80px] sm:w-[90px] h-auto object-contain border border-black rounded-lg' alt="Image 4" />
                  </div>
                  <div>
                    <img className='w-full sm:w-[400px] h-auto border border-black rounded-lg' src={project.images[3]} alt="Large bottom image" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
}
