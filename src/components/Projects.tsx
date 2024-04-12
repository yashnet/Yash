import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Fitness Websites"
            des=" Built a user-friendly fitness website using HTML , CSS ,Javascript , Node.js and Express.js with mobile compatibility and integrated registration forms using MongoDb to store data for user submissions. "
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des="Built a responsive Ecommerce Website Using HTML5 CSS JAVASCRIPT having features content management capabilities,an easy-to-use checkout option."
            src={projectTwo}
          />
          <ProjectsCard
            title="Travel-Agency Website"
            des=" Built travel agency website project showcasing diverse destinations, customizable tour packages, and seamless booking services. Created a visually appealing and user-friendly interface with mobile optimization."
            src={projectThree}
          />
          {/* <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
