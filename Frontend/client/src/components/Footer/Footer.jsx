import { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, PhoneCall, MapPin, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const Footer = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(""); 

  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();
   
    alert(`Subscribed with email: ${email}`);
    navigate('/newsletter');
  };

  return (
    <footer className="bg-[#003135] text-white pt-8 pb-4">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="footer-section space-y-4">
            <h5 className="text-lg font-semibold">About Vetty</h5>
            <p className="text-sm">
              Your virtual pet store! You need food, we&apos;ve got you!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div className="footer-section space-y-4">
            <h5 className="text-lg font-semibold">Company</h5>
            <ul className="space-y-2">
              <li><a href="/vetty-login" className="text-gray-400 hover:text-white">Vetty Login</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section space-y-4">
            <h5 className="text-lg font-semibold">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Vetty Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/customer-terms"
                  className="text-gray-400 hover:text-white"
                >
                  Customer Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/consumer-terms"
                  className="text-gray-400 hover:text-white"
                >
                  Consumer Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section space-y-4">
            <h5 className="text-lg font-semibold">Have a Question?</h5>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <MapPin size={20} className="mr-2" />
                <span>222 Broadway, New York, NY 10038</span>
              </li>
              <li className="flex items-center text-sm">
                <PhoneCall size={20} className="mr-2" />
                <span>(855) 468-3889 | (929) 256-6432</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={20} className="mr-2" />
                <a href="mailto:hello@vetty.co" className="text-gray-400 hover:text-white">hello@vetty.co</a>
              </li>
              <li className="text-sm">
                <p>8:30am - 8pm EST, Monday - Friday</p>
              </li>
            </ul>
          </div>

          {/* Newsletter Section (inside the grid) */}
          <div className="footer-section space-y-4">
            <h5 className="text-lg font-semibold">Newsletter</h5>
            <form onSubmit={handleSubscriptionSubmit} className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vetty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;