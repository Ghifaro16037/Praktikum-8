interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  link = "#",
}: ProjectCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Lihat
        </a>
      </div>
    </article>
  );
}
