import { FaFacebook, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md";

// helper: dùng thẻ <a> native thay vì window.open để tránh bị adblock chặn
const openLink = (url, isBlank = true) => {
  const a = document.createElement("a");
  a.href = url;
  if (isBlank) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const dockItems = (isDark, toggleDark) => [
  { icon: <GoHomeFill size={18} />, label: 'Home', onClick: () => window.location.href = "/" },
  {
    icon: <FaLinkedin size={18} />, label: 'LinkedIn',
    onClick: () => openLink("https://www.linkedin.com/in/nguyentu229vn/")
  },
  {
    icon: <FaGithub size={18} />, label: 'Github',
    onClick: () => openLink("https://github.com/TuNguyen229VN")
  },
  {
    icon: <FaFacebook size={18} />, label: 'Facebook',
    onClick: () => openLink("https://www.facebook.com/tunguyen229VN/")
  },
  {
    icon: <MdEmail size={18} />, label: 'Email',
    onClick: () => openLink("mailto:tunguyen2209.it.work@gmail.com")
  },
  {
    icon: <FaFilePdf size={18} />, label: 'Resume',
    onClick: () => openLink("/cv/NguyenThanhThanhTu_FrontendDeveloper_CV.pdf")
  },
  {
    icon: isDark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />,
    label: isDark ? 'Light Mode' : 'Dark Mode',
    onClick: toggleDark
  }
];