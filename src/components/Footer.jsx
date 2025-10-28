import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, MailIcon } from './icons';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.41016 7.75L29.4902 23.78L28.8302 8.04L3.41016 7.75Z" fill="#2563EB"/>
      <path d="M0 0L28.83 8.04L26.08 16.03L3.41 7.75L0 0Z" fill="#2563EB"/>
    </svg>
    <span className="font-bold text-2xl text-gray-true-800-solid font-outfit">CarRental</span>
  </Link>
);

const Footer = () => {
  const socialLinks = [
    { Icon: FacebookIcon, href: '#' },
    { Icon: InstagramIcon, href: '#' },
    { Icon: TwitterIcon, href: '#' },
    { Icon: MailIcon, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Cars', path: '/cars' },
    { name: 'My Bookings', path: '/bookings' },
    { name: 'List Your Car', path: '#' },
  ];
  const resources = ['Help Center', 'Terms of Service', 'Privacy Policy', 'Insurance'];
  const contact = ['1234 Luxury Drive', 'San Francisco, CA 94107', '+1 (555) 123-4567', 'car@example.com'];

  return (
    <footer className="bg-white pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-sm text-slate-500 my-4 leading-relaxed">
              Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} className="text-slate-500 hover:text-blue-600">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
            <FooterLinks title="Quick Links" links={quickLinks} isRouterLink={true} />
            <FooterLinks title="Resources" links={resources} />
            <FooterLinks title="Contact" links={contact} />
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2025 CarRental. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Terms</a>
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links, isRouterLink = false }) => (
  <div>
    <h4 className="font-roboto font-medium text-sm uppercase tracking-wider text-slate-950 mb-4">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          {isRouterLink ? (
            <Link to={link.path} className="text-base font-outfit text-slate-500 hover:text-blue-600 transition-colors">{link.name}</Link>
          ) : (
            <a href="#" className="text-base font-outfit text-slate-500 hover:text-blue-600 transition-colors">{link}</a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
