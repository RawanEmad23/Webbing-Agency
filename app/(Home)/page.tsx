import Hero from "./_components/Hero";
import Services from "./_components/servises";
import Chooses from "./_components/Chooses";
import OurTeam from "./_components/OurTeam";
// import OurClient from "./_components/OurClients";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Chooses />
      <OurTeam />
      {/* <OurClient /> */}
    </>
  );
}
