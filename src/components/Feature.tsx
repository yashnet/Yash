import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Front-End Development"
            des=" Do development of the graphical user interface of a website through the use of HTML, CSS, JavaScript and React.js so users can view and interact with that website."
            icon={null}
          />
          <Card
            title="Back-End Development"
            des=" Do development of server-side logic that powers websites and apps from behind the scenes with Express.js and Node.js and databases like MySQL and MongoDB."
            icon={<AiFillAppstore />}
          />
          <Card
            title="WordPress Development"
            des=" I am a skilled Web Developer specializing in crafting dynamic and user-friendly WordPress websites."
            icon={<SiProgress />}
          />
          <Card
            title="Wireframing"
            des="Web Designer specializing in wireframing websites with precision and creativity using Pencil.io."
            icon={<FaMobile />}
          />
          <Card
            title="Database Developer"
            des="Database Developer specializing in MongoDB, a leading NoSQL database technology that empowers businesses to store, manage, and retrieve data with flexibility and scalability."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="Web Developer specializing in hosting websites to bring digital visions to life on the internet with a keen focus on reliability, performance, and security."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
