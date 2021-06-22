import { Link } from 'react-router-dom';

import './footer.css';

export default function Footer() {
  return (
    <footer className="flex flex-col border-t mt-3 py-3 px-3 border-gray-300 sm:flex-row sm:justify-between">
      <div className="mb-2 md:mb-none">
        <Link to="/" className="text-xl text-blue-500 font-semibold tracking-wide">
          Dev Quizy
        </Link>
        <p className="text-lg tracking-wide font-semibold">Your skill tester!</p>
      </div>
      <div className="mb-2 md:mb-none">
        <a className="link" href="#1">
          Give Feedback
        </a>
        <a className="link" href="#2">
          Suggest Improvement
        </a>
        <a className="link" href="#3">
          Become a problem setter
        </a>
      </div>
      <div className="mb-2 md:mb-none">
        <span>Made by</span>
        <a className="link" target="_blank" href="https://www.github.com/akib22" rel="noreferrer">
          Akib
        </a>
      </div>
    </footer>
  );
}
