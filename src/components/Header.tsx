'use client';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold text-gray-900">
            Yifeng Shen
          </div>

          <div className="flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
