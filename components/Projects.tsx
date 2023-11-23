import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazon-clone.png";
import cyberBlog from "../public/img/projects/hoobank.png";
import noorShop from "../public/img/projects/nike-store.png";
import dynamicPortfolio from "../public/img/projects/tea-house.png";
import reactBD from "../public/img/projects/service.png";
import dashboard from "../public/img/projects/usability-hub.png";
import newsportal from "../public/img/projects/news-portal.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={newsportal.src}
          title="News24 Portal"
          link="https://news-24-portal.netlify.app/"
        />
            <ProjectCard
              img={noorShop.src}
              title="Nike Clone"
              link="https://shop-nike1.netlify.app/"
            />
          <ProjectCard
            img={cyberBlog.src}
            title="HooBank"
            link="https://curious-pika-ec3e13.netlify.app/"
          />
           <ProjectCard
          img={dynamicPortfolio.src}
          title="Tea House"
          link="https://abu-0-rayhan.github.io/Tea-House/"
        />
        <ProjectCard
          img={dashboard.src}
          title="Usability Hub"
          link="https://helpful-bubblegum-1cb14f.netlify.app/"
        />
        <ProjectCard
          img={amazonClone.src}
          title="Amazon Clone"
          link="https://magnificent-tiramisu-934b28.netlify.app/"
        />
        <ProjectCard
          img={reactBD.src}
          title="Services Provider"
          link="https://abu-0-rayhan.github.io/Tailwind-Starter-Project-with-darkMode/"
        />
       

        
      </div>
    </div>
  );
};

export default Projects;