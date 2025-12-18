import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "E-Commerce Website",
    description:
      "Platform jual beli online dengan fitur lengkap dan desain modern.",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mobile Banking App",
    description:
      "Aplikasi perbankan mobile dengan interface yang user-friendly dan aman.",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3184656/pexels-photo-3184656.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Creative Portfolio",
    description:
      "Portfolio website untuk menampilkan karya desain dengan tampilan yang elegan.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <section
          id="projects"
          className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700">Project Saya 🚀</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>

        <hr className="border-t border-gray-200 my-8" />
      </main>
    </>
  );
}
