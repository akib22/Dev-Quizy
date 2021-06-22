import { Link } from 'react-router-dom';

import Button from '../Button/index';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-3">
      <Link to="/" className="text-xl text-blue-500 font-semibold">
        Dev Quizy
      </Link>
      <Button content="Take a quiz" />
    </nav>
  );
}
