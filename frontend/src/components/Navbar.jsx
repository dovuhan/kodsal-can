import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Kodsal Can
        </div>
        <div>
          <Link to="/" className="text-gray-600 hover:text-primary mx-2">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-primary mx-2">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
