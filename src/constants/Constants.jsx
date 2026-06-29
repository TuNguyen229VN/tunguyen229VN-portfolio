import { FaFacebook, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md";

export const dockItems = (isDark, toggleDark) => [
  { icon: <GoHomeFill size={18} />, label: 'Home', onClick: () => window.location.href = "/" },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => {
    window.open("https://www.linkedin.com/in/nguyentu229vn/", "_blank")
  } },
  { icon: <FaGithub size={18} />, label: 'Github', onClick: () => window.open("https://github.com/TuNguyen229VN", "_blank") },
  { icon: <FaFacebook size={18} />, label: 'Facebook', onClick: () => window.open("https://www.facebook.com/tunguyen229VN/", "_blank") },
  {
    icon: <MdEmail size={18} />, label: 'Email', onClick: () => window.open("mailto:tunguyen2209.it.work@gmail.com", "_blank") 
  },
  {
    icon: <FaFilePdf  size={18} />, label: 'Resume', onClick: () => window.open("/cv/NguyenThanhThanhTu_FrontendDeveloper_CV.pdf", "_blank") 
  },
  {
        icon: isDark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />,
        label: isDark ? 'Light Mode' : 'Dark Mode',
        onClick: toggleDark
    }
]; 