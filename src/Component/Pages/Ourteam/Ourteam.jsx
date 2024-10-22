import img1 from "../../../assets/imgs/team1.png";
import img2 from "../../../assets/imgs/team2png.png"; 
import img3 from "../../../assets/imgs/team3png.png"; 

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Lead UI/UX Designer",
    skills: "UI/UX Design, Prototyping, User Research",
    description: "John is a creative thinker with a deep understanding of user experience and interface design. He has worked on various projects, crafting intuitive designs that provide a seamless flow.",
    img: img1,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Front-End Developer",
    skills: "React, JavaScript, CSS",
    description: "With a background in managing digital projects, Sarah excels at keeping everything on track. She ensures smooth communication between clients and the team.",
    img: img2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Project Manager",
    skills: "Project Management, Agile, Team Leadership",
    description: "Michael is a versatile developer skilled in both front-end and back-end technologies. He’s passionate about creating robust, scalable web applications that drive results..",
    img: img3,
  },
];

export default function Ourteam() {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-5 text-xxl font-bold font-oxanium font-thin">Our <span className='text-[#1F7099] text-xxl font-bold font-oxanium font-thin'>Team</span></h1>
        <h4 className="mb-5 text-xl">Meet the Minds Behind Our Innovation</h4>
      </div>
          
      <div className="flex flex-col md:flex-row md:gap-10 justify-center">
        {teamMembers.map(member => (
          <div key={member.id} className="w-full md:w-[400px] flex-shrink-0 mb-4">
            <div className="w-full h-[500px] bg-[#EFF6FF]">
              <img 
                src={member.img} 
                className="w-full h-full object-cover" 
                alt={member.name} 
              />
            </div>
            <div className="mt-4 ">
              <h3 className="text-lg font-bold text-[#1F7099] ">{member.name}, {member.position}</h3>
              <p className="text-sm text-gray-600 font-medium mt-2">
                <span className=" font-bold">Skills</span>: {member.skills}
              </p>
              <p className="text-gray-600 mt-4 leading-6">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
