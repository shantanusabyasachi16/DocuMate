import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-slate-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-slate-200">
          💬 DocuMate
        </h4>

        <div className="flex items-center space-x-8">
          <Link to="/" className="text-slate-300 text-white">
            <span className=" text-white"> Home</span>
          </Link>
          <Link to="/converter" className="text-slate-300 text-white">
            <span className=" text-white"> converter</span>
          </Link>

          <Link to="/contact" className="text-slate-300 hover:text-white">
            <span className=" text-white">contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
