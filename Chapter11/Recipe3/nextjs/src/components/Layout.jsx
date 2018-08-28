import Navbar from './Navbar';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />

    <div className="wrapper">
      {children}
    </div>
  </div>
)

export default Layout;
