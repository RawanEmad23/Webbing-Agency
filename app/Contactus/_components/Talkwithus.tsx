import React from 'react';
import Image from 'next/image';
export default function Contactus() {
    const contactDetails = [
        { icon: 'phone', text: '01012345678' },
        { icon: 'email', text: 'demo@gmail.com' },
        { icon: 'location_on', text: '81 Mohamed Mqld, Nasr City' },
      ];
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f7fc] ">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="bg-gradient-to-r from-[#3d84a7] to-[#5e9ab8] text-white p-8 md:w-1/2">
      <h2 className="text-3xl font-semibold mb-6">Talk with us</h2>
      <p className="mb-6">
        Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
      </p>
    
      <ul className="space-y-4">
        {contactDetails.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="material-icons mr-2">{item.icon}</span> {item.text}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {/* <Image
          src="https://via.placeholder.com/300x200"
          alt="Map"
          className="rounded-lg"
          width={2000}
          height={2000} /> */}
      
      </div>
    </div>

    <form  className="p-8 md:w-1/2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div>
          <label className="block font-bold text-[#1f7099] mb-2">First Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Mariam"
            required
          />
        </div>

        
        <div>
          <label className="block font-bold text-[#1f7099] mb-2">Last Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Mohamed"
            required
          />
        </div>

 
        <div>
          <label className="block font-bold text-[#1f7099] mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Mariam7@gmail.com"
            required
          />
        </div>

      
        <div>
          <label className="block font-bold text-[#1f7099] mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="01012345678"
            required
          />
        </div>
      </div>

   
      <div className="mt-6">
        <label className="block font-bold text-[#1f7099] mb-2">Select Subject?</label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center">
            <input type="radio" name="subject" className="mr-2" required /> General Inquiry
          </label>
          <label className="flex items-center">
            <input type="radio" name="subject" className="mr-2" /> New Project
          </label>
          <label className="flex items-center">
            <input type="radio" name="subject" className="mr-2" /> Customer Service
          </label>
          <label className="flex items-center">
            <input type="radio" name="subject" className="mr-2" /> Technical Issue
          </label>
        </div>
      </div>

     
      <div className="mt-6">
        <label className="block text-[#1f7099] mb-2">Message</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          rows="4"
          placeholder="Write your message.."
          required
        ></textarea>
      </div>

 
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-[#1f7099] hover:bg-[#14597b] transition duration-300 text-white px-6 py-2 rounded"
        >
          Send Message
        </button>
      </div>
    </form>
      </div>
    </div>
  );
}
