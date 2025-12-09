import { Phone, MapPin, Clock, Heart, Shield, Package, MessageCircle } from 'lucide-react';

function App() {
  const whatsappNumber = "918329578405";
  const whatsappMessage = "Hello, I would like to inquire about medicines at Shree Swami Samarth Medical Store";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8" fill="white" />
            <div>
              <h1 className="text-2xl font-bold">Shree Swami Samarth Medical Store</h1>
              <p className="text-teal-100 text-sm">Your Health, Our Priority</p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Shree Swami Samarth Medical Store
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted Healthcare Partner in Chhatrapati Sambhajinagar
          </p>
          <div className="flex justify-center items-center space-x-2 text-gray-700 mb-8">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span className="text-lg">Chhatrapati Sambhajinagar, Maharashtra</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Get in Touch</span>
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Prescription Medicines</h4>
              <p className="text-gray-600">
                Wide range of prescription medications from trusted pharmaceutical brands.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Healthcare Products</h4>
              <p className="text-gray-600">
                Complete range of healthcare and wellness products for your daily needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Quality Assured</h4>
              <p className="text-gray-600">
                100% genuine medicines with proper storage and quality maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">Featured Products</h3>
          <p className="text-center text-gray-600 mb-12">Available medicines and healthcare products</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://www.abeautyedit.com/wp-content/uploads/2021/05/cetaphil-skincare-products.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Cetaphil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Cetaphil</h4>
                <p className="text-sm text-gray-600 mb-3">Gentle facial cleanser & moisturizer</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://cdn01.pharmeasy.in/dam/products/269415/crocin-pain-relief-strip-of-15-tablets-1-1641536312.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Pain Relief"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Pain Relief Tablets</h4>
                <p className="text-sm text-gray-600 mb-3">Effective pain and fever management</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://twobabox.com/wp-content/uploads/2023/04/63e5ee34908a41e889cf16d087b32854.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Vitamins"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Vitamin Supplements</h4>
                <p className="text-sm text-gray-600 mb-3">Essential vitamins and minerals</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4021812/pexels-photo-4021812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="First Aid"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">First Aid Supplies</h4>
                <p className="text-sm text-gray-600 mb-3">Complete first aid kit essentials</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3683099/pexels-photo-3683099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Antibiotics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Antibiotics</h4>
                <p className="text-sm text-gray-600 mb-3">Prescription antibiotic medicines</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="http://www.aboutuganda.com/wp-content/uploads/Skin-care-lines.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Skincare"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Skincare Products</h4>
                <p className="text-sm text-gray-600 mb-3">Premium dermatological products</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://m.media-amazon.com/images/I/71I3x4GggrL.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Cough Syrup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Cough & Cold Relief</h4>
                <p className="text-sm text-gray-600 mb-3">Syrups and tablets for cold</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src="https://www.kauveryhospitalsbangalore.com/assets/uploads/blog/guthealth_66d6c67a293ec.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Digestion"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Digestive Health</h4>
                <p className="text-sm text-gray-600 mb-3">Antacids and digestive aids</p>
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold transition-all text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">About Our Store</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Shree Swami Samarth Medical Store is your trusted healthcare partner in Chhatrapati Sambhajinagar.
                We are committed to providing quality medicines and healthcare products to our community.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Under the guidance of <span className="font-semibold text-gray-800">Vaibhav Santosh Pande</span>,
                we ensure that every customer receives genuine medicines, expert advice, and compassionate care.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Open Daily</p>
                    <p className="text-gray-600">Contact us for store timings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Quick Response</p>
                    <p className="text-gray-600">Reach us via WhatsApp for instant assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-12 rounded-2xl shadow-xl text-white">
              <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Genuine and quality-assured medicines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Expert pharmaceutical guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Wide range of healthcare products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Convenient WhatsApp ordering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Trusted by the community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Need Medicines or Healthcare Products?</h3>
          <p className="text-xl text-teal-100 mb-8">
            Contact us directly on WhatsApp for quick assistance and orders
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            <span>Chat with Us on WhatsApp</span>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-teal-500" fill="currentColor" />
            <h4 className="text-xl font-bold text-white">Shree Swami Samarth Medical Store</h4>
          </div>
          <p className="text-gray-400 mb-2">Chhatrapati Sambhajinagar, Maharashtra</p>
          <p className="text-gray-400 mb-4">Proprietor: Vaibhav Santosh Pande</p>
          <p className="text-sm text-gray-500">Your Health, Our Priority</p>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all z-50 animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;

