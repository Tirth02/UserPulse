import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-lg">Random User Explorer</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/random">Random User</Link>
      </div>
    </nav>
  );
}
