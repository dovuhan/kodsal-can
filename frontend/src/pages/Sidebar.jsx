import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Öğrenci Paneli</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">Profil</Link>
          </li>
          <li>
            <Link to="/exams" className="hover:text-gray-300">Sınavlar</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

