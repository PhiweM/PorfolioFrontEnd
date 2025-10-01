import productStorImg from './../assets/projects/productStore.png';
import movieImg from './../assets/projects/movieDatabaseimg.avif'

export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
  gitHubLink: string;
}

export const projects: Project[] = [
  {
    image: productStorImg,
    title: '🛒 Product Store',
    description: 'A MERN app that enables users to add, update, and delete products, providing real-time product management. Features a user-friendly interface, making it easy to handle inventory and maintain an organized storefront.',
    techStack: [ "React", "TypeScript", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    projectLink: 'https://mern-store-app-ofp3.onrender.com',
    gitHubLink: 'https://github.com/PhiweM/mern-store-app'
  },
  {
    image: movieImg,
    title: '🎥Movie Database',
    description: 'a movie watchList App using the OMDb movie database API. The app takes a title input of a movie then returns the movies that match the search query. You have the ability to add the movies to a watchList page by storing the selecting movie in local storage then rendering it when the window is loaded.',
    techStack: [ "JavaScript", "Rest APIs", "CSS"],
    projectLink: 'https://merry-nougat-56846f.netlify.app/watchlist',
    gitHubLink: 'https://github.com/PhiweM/Movie-Watchlist-App/tree/main'
  },
  

];

