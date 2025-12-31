const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b px-6 py-4">
        <h1 className="text-xl font-semibold">UserScope</h1>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;