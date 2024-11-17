export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about our journey and vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img src="/about.png" alt="About Us" 
                 className="w-full h-full object-cover"/>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Detailed description about your company's history, mission, and values.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Information about your company's future goals and aspirations. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
