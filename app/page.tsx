import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Unleashing the Power of Digital for You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive solutions and professional services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Link href="/services" 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="aspect-video overflow-hidden">
            <Image 
              src="/services.png" 
              alt="Description"
              width={500}  
            height={300} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Services</h3>
              <p className="text-gray-600">Explore our range of professional services</p>
            </div>
          </Link>
          
          <Link href="/about" 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="aspect-video overflow-hidden">
            <Image 
              src="/aboutus.png" 
              alt="Description"
              width={500}  
              height={300} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">About Us</h3>
              <p className="text-gray-600">Learn more about our company and values</p>
            </div>
          </Link>
          
          <Link href="/contact" 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="aspect-video overflow-hidden">
            <Image 
              src="/contact.png" 
              alt="Description"
              width={500}  
              height={300} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
              <p className="text-gray-600">Get in touch with our team</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}