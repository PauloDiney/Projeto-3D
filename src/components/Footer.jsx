import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart, FaArrowUp } from "react-icons/fa";

const socialLinks = [
  { 
    href: "https://github.com/PauloDiney", 
    icon: <FaGithub />, 
    label: "GitHub",
    hoverColor: "hover:text-gray-300"
  },
  { 
    href: "https://www.linkedin.com/in/paulodiney", 
    icon: <FaLinkedinIn />, 
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400"
  },
  { 
    href: "https://www.instagram.com/paulodiney", 
    icon: <FaInstagram />, 
    label: "Instagram",
    hoverColor: "hover:text-pink-400"
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-screen bg-gradient-to-r from-[#5542ff] via-[#4837d4] to-[#3b2ca8] text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          
          {/* Brand section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-3 text-xl font-bold tracking-wide">Paulo Diney</h3>
            <p className="mb-4 text-sm text-gray-200 leading-relaxed">
              Desenvolvedor apaixonado por criar experiências digitais incríveis e inovadoras.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>Feito com</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>em React</span>
            </div>
          </div>

          {/* Social links section */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-lg font-semibold">Conecte-se</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 ${link.hoverColor}`}
                  aria-label={link.label}
                >
                  {link.icon}
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links section */}
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <h4 className="mb-4 text-lg font-semibold">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#privacy-policy"
                className="text-sm text-gray-200 transition-colors duration-200 hover:text-white hover:underline"
              >
                Política de Privacidade
              </a>
              <a
                href="#terms"
                className="text-sm text-gray-200 transition-colors duration-200 hover:text-white hover:underline"
              >
                Termos de Uso
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center gap-2 text-sm text-gray-200 transition-colors duration-200 hover:text-white md:justify-end"
              >
                <span>Voltar ao topo</span>
                <FaArrowUp className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-gray-300">
              © {currentYear} Paulo Diney. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-400">
              Desenvolvido com React • Vite • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;