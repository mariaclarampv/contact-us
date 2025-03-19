const Header = () => {
    return (
      <header className="bg-violet-300 text-white p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-300">
           
          </div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-purple-300">Home</a></li>
            <li><a href="/sobre" className="hover:text-purple-300">Sobre</a></li>
            <li><a href="/contato" className="hover:text-purple-300">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  