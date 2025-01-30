const Header = () => {
    return (
      <header className="bg-gray-700 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav className="ml-auto">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  