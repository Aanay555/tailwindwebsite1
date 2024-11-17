export default function Contact() {
    return (
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team today
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32"/>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Send Message
                </button>
              </form>
            </div>
  
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                  <p>uzmarahd@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Phone</h3>
                  <p>0123456789</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Address</h3>
                  <p>123 Johar<br/>Karachi, Pakistan</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Business Hours</h3>
                  <p>Friday to Thursday: 10:00 AM - 6:00 PM<br/>
                      Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  