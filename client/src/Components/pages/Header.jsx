export default function Header() {
    return (
      <header className="relative min-h-screen bg-gray-900 text-white overflow-hidden font-sans">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
  
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-script leading-tight mb-6">
            Your One-Stop Destination for Bikes and Parts
            </h1>
            <div className="text-[2vh] font-light mb-8">
              <p className="font-script">
              From motorcycles to spare parts, find everything in one place.
                <br className="hidden sm:block font-script" />
                Simply explore, compare, and book your dream bike effortlessly  .
              </p>
            </div>
            <a
              href=""
              className="inline-flex items-center gap-2 bg-gray-800 px-8 py-3 rounded-full text-white text-sm hover:scale-105 transition-all duration-300 mt-4"
            >
              Explore now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </header>
    )
  }