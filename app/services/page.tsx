import Image from "next/image";

export default function Services() {
    return (
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
              <div className="aspect-video overflow-hidden">
              <Image 
              src="/serv1.png" 
              alt="Description"
              width={500}  
              height={300} />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service 1</h2>
                <p className="text-gray-600 leading-relaxed">
                  Detailed description of service 1 and its benefits. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
  
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
              <div className="aspect-video overflow-hidden">
              <Image 
              src="/serv2.png" 
              alt="Description"
              width={500}  
              height={300} />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service 2</h2>
                <p className="text-gray-600 leading-relaxed">
                  Detailed description of service 2 and its benefits. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  