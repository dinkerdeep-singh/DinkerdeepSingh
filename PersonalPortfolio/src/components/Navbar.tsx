import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <nav className="flex items-center justify-between p-3 bg-black text-white">
      <div className="text-3xl font-mono font-extrabold px-10 cursor-pointer" onClick={() => navigate('/')}>
        {'<DS/>'}
      </div>  
      <ul className="flex gap-6 text-lg ml-auto mr-4">
        <li className="cursor-pointer" onClick={() => navigate('/about')}>
          About
        </li>
        <li className="cursor-pointer" onClick={() => navigate('/projects')}>
            Projects
        </li>
        <li className="cursor-pointer">
            <a 
                href="mailto:dinkerdeep@gmail.com?subject=Checked%20your%20portfolio&body=Hello%20Dinker%2C%0A%0ANice%20to%20meet%20you!%20%0AI%20have%20just%20checked%20your%20portfolio.%0AI%20want%20to%20connect."
                // target="_blank"
                rel="noopener noreferrer"
            >
                Contact
            </a>
        </li>
      </ul>
      
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-white text-gray-900 rounded-xl font-semibold"
          onClick={() => window.open("https://drive.google.com/file/d/162mEcH5yTus-gEpUl3V08GpmDV-B3teu/view?usp=drive_link", "_blank")}
        >
          Download CV
        </button>
      </div>
    </nav>
  );
}
