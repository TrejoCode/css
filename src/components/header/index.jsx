/**
 * @version 1.0.2
 * @author Trejocode - Sergio
 * @description Componente del <Header />
 */

import Link from "next/link";
import Image from "next/image";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Logo from "../../../public/img/logo.png";

const Header = () => {
  return (
    <header className="justify-center" id="header">
      <div className="container">
        <div className="left row align-center auto">
          <div className="logo">
            <Link href="/">
              <a aria-label="Trejocode Logo Inicio" role="img">
                <Image src={Logo} alt="Trejocode logo" title="Trejocode logo" />
              </a>
            </Link>
          </div>
        </div>
        <div className="right full">
          <nav>
            <Link href="/">
              <a className="color-secondary weight-semi">Inicio</a>
            </Link>
            <a
              href="https://github.com/TrejoCode/css"
              className="color-secondary weight-semi"
            >
              GitHub
            </a>
          </nav>
          <div className="social auto wow align-center fadeInLeft">
            <a
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
              className="align-center"
              href="https://github.com/TrejoCode/css"
            >
              <AiFillGithub size={18} title="Icono de GitHub" />
            </a>
            <a
              aria-label="Youtube"
              rel="noopener noreferrer"
              target="_blank"
              className="align-center"
              href="https://www.youtube.com/trejocode"
            >
              <AiFillYoutube size={18} title="Icono de Youtube" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
