import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-2xl shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-cream bg-clip-text text-transparent tracking-tighter">
          ANDREW.KF
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {['About', 'Skills', 'Experience', 'Projects'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-brand-blue transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 glass rounded-full text-sm hover:bg-brand-blue hover:text-white transition-all duration-300">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-3xl font-bold hover:text-brand-blue" onClick={() => setIsOpen(false)}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
    <div className="blob top-[-10%] left-[-10%] animate-float"></div>
    <div className="blob bottom-[-10%] right-[-10%] animate-float" style={{ animationDelay: '2s' }}></div>
    
    <div className="container mx-auto text-center z-10">
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 glass rounded-full text-brand-blue text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
        </span>
        <span>Available for Projects</span>
      </div>
      
      <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter leading-none">
        Fullstack <br/>
        <span className="text-brand-cream italic font-serif">Engineer.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Hi, I'm <span className="text-white font-medium">Andrew Krisna Ferdinanto</span>. I specialize in building 
        performant backends and immersive frontends from the ground up.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <button className="btn-primary group">
          View Work <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all">
          My Stack
        </button>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const categories = [
    { title: 'Backend Core', skills: ['Java', 'Spring Boot', 'Oracle', 'SQL Server'], color: 'from-blue-500' },
    { title: 'Frontend UI', skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion'], color: 'from-purple-500' },
    { title: 'Dev & Arch', skills: ['Docker', 'Microservices', 'RESTful API', 'Git'], color: 'from-orange-500' },
    { title: 'Tools', skills: ['Maven', 'SonarQube', 'Postman', 'Vite'], color: 'from-green-500' },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Solutions engineered with <span className="text-brand-blue">precision.</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`}></div>
              <h4 className="text-xl font-bold mb-8 text-brand-cream">{cat.title}</h4>
              <ul className="space-y-4">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const list = [
    { title: 'New Digisales Activity', type: 'Enterprise App', desc: 'A comprehensive activity tracking system for bank sales agents using Spring Boot and Oracle database.' },
    { title: 'Batch Migration Tool', type: 'Infrastructure', desc: 'Secure data migration project involving SQL Server to Oracle transitions with staging validation.' },
    { title: 'Product Hierarchy Manager', type: 'Data Eng', desc: 'Dynamic product categorization engine with multi-level nesting and high-performance querying.' },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">Selected Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {list.map((p, idx) => (
            <div key={idx} className="glass group rounded-[3rem] p-10 hover:border-brand-blue/40 transition-all duration-500">
              <div className="text-xs font-bold text-brand-blue uppercase mb-4">{p.type}</div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-cream transition-colors">{p.title}</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">{p.desc}</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">Private Enterprise</span>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-brand-blue transition-all">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6">
    <div className="container mx-auto">
      <div className="glass rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
        <div className="blob left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 scale-150 opacity-10"></div>
        <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter">Ready to <span className="text-brand-blue italic">scale?</span></h2>
        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-16">
          I'm currently looking for new challenges and high-impact engineering roles.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="mailto:andrew@example.com" className="flex items-center space-x-3 text-2xl font-bold hover:text-brand-blue transition-colors">
            <Mail /> <span>Email Me</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-2xl font-bold hover:text-brand-blue transition-colors">
            <Linkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-slate-500 font-medium tracking-widest text-xs uppercase underline decoration-brand-blue/30 underline-offset-8">
          Designed & Built by Andrew Krisna Ferdinanto &copy; 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
