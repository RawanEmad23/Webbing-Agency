import Hero from "./_components/Hero";
import Services from "./_components/servises";
import Chooses from "./_components/Chooses";
// import OurTeam from "./_components/OurTeam";
import Companies from "./_components/Companies";
import OurClient from "./_components/OurClients";
// import ServicesSlider from "./_components/ServicesSlider";
// import OurClient from "./_components/OurClients";




export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Services />
      <Chooses />
    {/* <OurTeam /> */}
      <OurClient />
    </>
  );
}
