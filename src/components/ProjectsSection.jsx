import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "API Toolkit",
    description: "A beautiful page for multiple API tools",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Weather Lookup", "Currency Converter", "Phone Verification"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditroid/Reactjs-FetchAPI-Task",
  },
  {
    id: 2,
    title: "URL Shortener",
    description:
      "A web application that allows users to create custom short links by providing a long URL and a desired keyword",
    image: "/projects/project2.png",
    tags: ["Next.js", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditroid/url-shortner",
  },
  {
    id: 3,
    title: "Password Managar",
    description:
      "A secure and efficient password management app that allows users to store and retrieve credentials seamlessly",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditroid/Pass-Manager",
  },
  {
    id: 4,
    title: "LinkTree",
    description:
      "A web application that replicates the core functionality of LinkTree, allowing users to create a personalized webpage containing all their important links",
    image: "/projects/project4.png",
    tags: ["Next.js", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditroid/linktree-clone",
  },
  {
    id: 5,
    title: "Text Editor",
    description:
      "A lightweight and efficient web application that provides users with essential text manipulation features",
    image: "/projects/project5.png",
    tags: ["React", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditroid/Text-Editor",
  },
  {
    id: 6,
    title: "NewsAPK",
    description:
      "A dynamic news website that fetches and organizes the latest articles from various sources, providing users with a seamless browsing experience",
    image: "/projects/project6.png",
    tags: ["React", "Bootstrap", "NewsAPK API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aditroid/News",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Aditroid"
          >
            Check Out More Projects on Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};