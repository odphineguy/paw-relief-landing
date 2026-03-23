import { Link } from 'react-router-dom';

function Footer() {
  const footerLinks = [
    { name: 'Contact Us', href: 'mailto:support@pawrelief.app', external: true },
    { name: 'Support', href: '/support', external: false },
    { name: 'Privacy Policy', href: '/privacy', external: false },
    { name: 'Terms of Service', href: '/terms', external: false },
  ];


  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/uploads/icon-iOS-Default-1024x1024@1x.png" alt="Paw Relief Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-2xl font-bold text-white">Paw Relief</span>
            </div>
            <p className="text-gray-400 mb-4">
              Track, manage, and understand your pet's allergies with AI-powered insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#help-center" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Paw Relief. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
