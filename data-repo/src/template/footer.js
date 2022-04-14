import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="text-gray-600 body-font fixed bottom-0 w-full">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="inline-flex  ">
            <FontAwesomeIcon icon={faUserSecret} size="lg" />
            <p className="text-gray-500 text-sm text-center sm:text-left w-full ml-2">
              Sherkin One (2022)
            </p>
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://twitter.com/sherkinOne"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://github.com/SherkinOne"
              rel="noopener noreferrer"
              className="text-gray-600 ml-5"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-5"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
