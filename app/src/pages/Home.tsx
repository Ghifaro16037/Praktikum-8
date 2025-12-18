import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section
          id="about"
          className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg"
              alt="Profil Ahmad Rizki"
              className="w-64 h-64 object-cover rounded-full shadow-xl ring-4 ring-blue-500"
            />
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
                Halo, Saya Ahmad Rizki 👋
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl">
                Saya adalah seorang Web Developer dan UI/UX Designer dengan
                passion dalam menciptakan pengalaman digital yang menarik dan
                intuitif. Dengan pengalaman lebih dari 3 tahun, saya telah
                mengerjakan berbagai proyek dari website perusahaan hingga
                aplikasi mobile.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200 my-8" />
      </main>
    </>
  );
}
