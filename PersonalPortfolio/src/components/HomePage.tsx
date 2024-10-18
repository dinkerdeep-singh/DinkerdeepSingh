export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8 md:p-16 min-h-screen overflow-hidden">
      {/* Left Content */}
      <div className="md:w-2/3 space-y-4 my-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm Dinker <span role="img" aria-label="waving hand">👋</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
        I'm a Software Engineer with 3+ years of experience in data and backend engineering. 
        I've led data migrations, optimized ETL pipelines, and automated reporting, delivering cost savings for clients like Sephora and Etihad. 
        Certified in Azure, I'm skilled in cloud and big data technologies, and proficient in Python, SQL, Scala and JavaScript. 
        I'm a fast learner, always eager to explore new technologies.
        </p>

        <div className="flex items-center gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/maps/place/New Delhi,+India">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </a>
            <a href="https://www.google.com/maps/place/New Delhi,+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-gray-300">New Delhi, India
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a 
            href="https://github.com/dinkerdeep-singh"
            aria-label="GitHub" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.43-1.1-1.43-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.564 9.564 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.6 1.02 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.49A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a 
            href="https://x.com/dnkrtwt"
            aria-label="Twitter" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 0 0 1.88-2.35 8.5 8.5 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.2 3.86A12 12 0 0 1 3.1 4.85a4.23 4.23 0 0 0 1.3 5.63 4.19 4.19 0 0 1-1.92-.53v.05c0 2.08 1.48 3.81 3.45 4.2a4.2 4.2 0 0 1-1.91.07 4.23 4.23 0 0 0 3.95 2.94 8.5 8.5 0 0 1-5.28 1.82c-.34 0-.68-.02-1.02-.06a12 12 0 0 0 6.46 1.89c7.75 0 12-6.42 12-12v-.55c.83-.6 1.56-1.33 2.14-2.17z" />
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/in/dinkerdeep-singh/"
            aria-label="LinkedIn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.18c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.18h-3v-5.59c0-1.33-.03-3.04-1.85-3.04s-2.14 1.45-2.14 2.95v5.68h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.85-1.54 3.04 0 3.6 2 3.6 4.55v5.62z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="relative md:w-1/3 mt-8 md:mt-0">
      {/* Shadow Layer */}
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-800 rounded-lg transform translate-x-4 translate-y-4 z-0"></div>

      {/* Image Layer */}
      <div className="relative bg-gray-800 rounded-lg p-1 z-10">
        <img
          src="/pfp-sep-2024-1.jpg"
          alt="Dinker"
          className="rounded-lg"
        />
      </div>
    </div>

    </section>
  );
};
