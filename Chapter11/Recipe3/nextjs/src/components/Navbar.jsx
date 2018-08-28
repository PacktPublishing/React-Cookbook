import Link from 'next/link';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>Codejobs</li>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </div>
)

export default Navbar;
