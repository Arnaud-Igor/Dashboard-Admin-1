function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 backdrop-blur-md shadow-lg border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-100 font-thin flex flex-col  lg:flex-row items-center justify-center gap-2 md:gap-6 tracking-widest">
          <p>&copy; 2024 React Admin Dashboard</p>
          <p className="border-l border-r border-gray-100 px-6">{`ARNAUD IGOR N'TAKPE`}</p>
          <p>DEVELOPPEUR FULL STACK JUNIOR</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
