
import { LuGithub } from "react-icons/lu";
import { HiOutlineExternalLink } from "react-icons/hi";


interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techStack: string[];
  projectLink: string;
  gitHubLink: string;
}

//ProjectCard 2: IMAGE LEFT
export default function ProjectCard2(props:ProjectCardProps) {

  return (
    <div 
      className="project-card md:min-w-[600px] md:max-w-[800px] xl:max-w-[1000px] h-80 xl:h-96 flex rounded mx-auto bg-gray-800 mb-12 z-0 md:ml-10 transition-all duration-300  shadow-gray-900 hover:shadow-gray-900 hover:translate-y-[-5px]" 
      onClick={() => window.open(props.projectLink, '_blank')}
    >
        {/* Image Section */}
        <div className="card-body relative w-1/4 md:w-1/2 mx-auto py-4 md:py-8 pr-12 flex justify-center cursor-pointer"> 
            <img 
                src={props.image} 
                alt="Project image" 
                loading="lazy"
                className="project-image rounded-2xl shadow-lg w-full h-auto rounded-tl-none rounded-bl-none bg-cover bg-center object-cover" />

            <div className="absolute inset-0 bg-cyan-900/50 hover:bg-cyan-900/5 flex items-center justify-center rounded-tl rounded-bl"></div>
        </div>
      
        {/* Content Section */}
        <div className="card-header w-3/4 md:w-1/2 mh-full pt-4 pb-2 px-4 md:pt-6 pb-none flex flex-col">
            <h2 className="project-title text-gray-400 text-xl ubuntu-bold mb-2">{props.title}</h2>
            <p className="desc text-gray-400  font-normal flex-grow mb-6">{props.desc.length > 300 ? `${props.desc.slice(0,300)}...` : props.desc}</p>

            <div className="tech-stack-wrap flex items-center mt-auto justify-between">

                <div className="external-links flex gap-2">
                    <a href={props.gitHubLink} target="_blank"  onClick={(e) => e.stopPropagation()} className=' text-gray-400 text-xl hover:text-cyan-300'><LuGithub /></a>
                    <a href={props.projectLink} target="_blank"  onClick={(e) => e.stopPropagation()} className=' text-gray-400 text-xl hover:text-cyan-300'><HiOutlineExternalLink /></a>
                </div>

                <div className="techStack flex flex-wrap  justify-end text-right">
                    {props.techStack.map((tech:string, index:number) => {
                    return (
                        <p key={index} className='text-xs font-thin tracking-wider text-gray-400 mr-2'>{tech}</p>
                    ) 
                    })}
                </div>

            </div>
        </div>
      
    </div>
  );
}



