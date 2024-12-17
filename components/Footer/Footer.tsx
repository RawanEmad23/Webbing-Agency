
// import logo2 from "../../assets/imgs/image (13).png"; 
// import call from "../../assets/imgs/call.png";
// import mail from "../../assets/imgs/image (3).png";
// import location from "../../assets/imgs/image (2).png";
// import web from "../../assets/imgs/image (5).png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10">
      <Image className='w-[230px] ml-6 mb-6' width={500} height={500} src={`/assets/imgs/logo.png`} alt="" />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <div className='flex gap-4 item-center'>
                <Image src={`/assets/imgs/call.png`} width={500} height={500} className='w-6' alt="" /> 
                <li>01024456789</li>
              </div>
              <div className='flex gap-4 item-center'>
                <Image src={`/assets/imgs/image (2).png`} width={500} height={500} className='w-6' alt="" /> 
                <li>81 Mohamed Mqld, Nasr City</li>
              </div>
              <div className='flex gap-4 item-center'>
                <Image src={`/assets/imgs/image (3).png`} width={500} height={500} className='w-6' alt="" /> 
                <li>Webbing-Agency@gmail.com</li>
              </div>
              <div className='flex gap-4 item-center'>
                <Image src={`/assets/imgs/image (5).png`} width={500} height={500} className='w-6' alt="" /> 
                <li>www.webbing-agency.com</li>
              </div>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Projects</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#">
                <div className='w-[20px] h-[20px] rounded-full border border-[2px] p-4 border-[#bfd4f1] text-center flex items-center justify-center'>
                  <i className="fa-brands text-[#1F7099] fa-linkedin-in"></i>
                </div>
              </a>
              <a href="#">
                <div className='w-[20px] h-[20px] rounded-full border border-[2px] p-4 border-[#bfd4f1] text-center flex items-center justify-center'>
                  <i className="fa-brands fa-facebook-f text-[#1F7099] "></i>
                </div>
              </a>
              <a href="#">
                <div className='w-[20px] h-[20px] rounded-full border border-[2px] p-4 border-[#bfd4f1] text-center flex items-center justify-center'>
                  <i className="fa-brands fa-twitter text-[#1F7099] "></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 text-center  ">
          <div className="flex justify-center ">
            <Image className='w-[130px] h-full ' width={400} height={400} src={`/assets/imgs/image(13).png`} alt="" />
          </div>
       
        </div>
      </div>
    </footer>
  );
}
