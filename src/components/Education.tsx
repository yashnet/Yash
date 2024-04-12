import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science and Engineering"
            subTitle="Galgotias University (2018 - 2022)"
            result="7.49/10"
            des="I am a  graduate with a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering (CSE) from Galgotias University. Throughout my academic journey, I have acquired a strong foundation in computer science principles, engineering practices, and technological innovation, preparing me for a successful career in the dynamic field of technology."
          />
          <ResumeCard
            title="Little Flower House School (CBSE Board)"
            subTitle="12th (2015 - 2016)"
            result="80.6/100 %"
            des="I am a high school graduate with a strong academic background . My completion of the 12th-grade curriculum has provided me with a solid educational foundation and essential skills that have laid the groundwork for my future academic and professional pursuits."
          />
          <ResumeCard
            title="St Joseph's Convent School (ICSE Board)"
            subTitle="10th (2013 - 2014)"
            result="88/100 %"
            des="I am a secondary school graduate with a strong academic foundation . My completion of the 10th-grade curriculum marks an important milestone in my educational journey, laying the groundwork for further academic pursuits and personal development. "
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
