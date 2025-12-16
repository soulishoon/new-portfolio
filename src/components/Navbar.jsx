import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["home", "experience", "case studies" , "projects", "concepts", "skill", "about Me"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // تعیین سکشن فعال بر اساس موقعیت اسکرول
      navLinks.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1433]/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-8 py-6 text-white font-sans">
        {/* 🟠 منوی دسکتاپ */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                className={`cursor-pointer transition-colors ${
                  activeSection === link
                    ? "font-bold border-b-2 border-[#E36414] pb-1"
                    : "hover:text-gray-300"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🟠 دکمه Contact me فقط در دسکتاپ */}
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="hidden md:block px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-[#0b1221] transition cursor-pointer"
        >
          Contact me
        </Link>

        {/* 🟢 دکمه منو در موبایل */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* 🟣 منوی موبایل */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1433]/95 backdrop-blur-sm py-6 px-8 flex flex-col items-center gap-6 text-white text-sm font-medium shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-blue-300 cursor-pointer transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
