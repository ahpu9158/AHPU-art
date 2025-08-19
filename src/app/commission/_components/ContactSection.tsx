import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { MdWeb } from "react-icons/md";

export default function ContactSection() {
  const links = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/rpu.titiporn",
      icon: <FaFacebook className="text-xl" />,
      color: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chompoo_9158/",
      icon: <FaInstagram className="text-xl" />,
      color: "hover:text-pink-500 hover:border-pink-500",
    },
    {
      name: "Cara",
      url: "https://cara.app/ahpu",
      icon: <MdWeb className="text-xl" />,
      color: "hover:text-purple-500 hover:border-purple-500",
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/ahpu",
      icon: <SiLinktree className="text-xl" />,
      color: "hover:text-green-500 hover:border-green-500",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-6">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 justify-center rounded-lg border-2 border-gray-300 py-4 px-6 text-black font-medium transition-all duration-300 hover:scale-[1.02] ${link.color}`}
        >
          {link.icon}
          <span className="text-base">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
