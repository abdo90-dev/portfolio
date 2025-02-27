import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, ExternalLink, ChevronRight, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'propos', 'compétences', 'expérience', 'portfolio', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#accueil" className="text-2xl font-bold text-gray-800">Abdelhak<span className="text-blue-600">.dev</span></a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['accueil', 'propos', 'compétences', 'expérience', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {['accueil', 'propos', 'compétences', 'expérience', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Abdelhak Haddadi</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Développeur Full Stack</h2>
            <p className="text-lg mb-8">Je construis des expériences numériques exceptionnelles et accessibles pour le web.</p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Contactez-moi
              </a>
              <a href="#portfolio" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">
              Voir mon travail
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/abdohad.jpg"                 alt="Abdelhak Haddadi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="propos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">À propos de moi</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="Developer working" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Qui suis-je?</h3>
              <p className="text-gray-700 mb-4">
              Je suis un développeur Full Stack passionné avec une expertise dans la création d'applications Web modernes.
              Avec une base solide dans les technologies front-end et back-end, je crée des expériences transparentes et conviviales qui résolvent des problèmes du monde réel.
              </p>
              <p className="text-gray-700 mb-6">
              Mon parcours dans le développement web a commencé il y a 4 ans, et depuis, j'apprends et m'adapte continuellement aux nouvelles technologies. Je crois en l'écriture de code propre et maintenable et en la création d'applications qui sont non seulement fonctionnelles mais aussi intuitives et accessibles.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold">Nom:</p>
                  <p className="text-gray-700">Abdelhak Haddadi</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-700">haddadiabdelhak64@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Telephone:</p>
                  <p className="text-gray-700">haddadiabdelhak64@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">De:</p>
                  <p className="text-gray-700">Paris, France</p>
                </div>
                <div>
                  <p className="font-semibold">Experience:</p>
                  <p className="text-gray-700">4 Ans</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="http://linkedin.com/in/abdelhak-haddadi-babb6b1ba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition flex items-center"
                >
                  <Linkedin size={18} className="mr-2" /> LinkedIn
                </a>
                <a 
                  href="../public/ABDELHAK_HADDADI_CV (3).pdf" 
                  download
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Télécharger le CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mes compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Langages de programmation</h3>
              <div className="space-y-4">

              <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Java</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">C++</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">C</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Python</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Développement Web</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Spring Boot</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML/CSS</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Angular</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Next.js</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Database */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Database</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MongoDB</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MySQL</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">SQL server</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Firebase</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Développement mobile</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React Native</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Android (Java)</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>            
            {/* Other */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Cloud computing</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">AWS</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Google cloud</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Docker</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">kubernetes</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Expérience et formation</h2>
          
          <div className="flex flex-col md:flex-row">
            {/* Work Experience */}
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Expérience professionnelle</h3>
              
              <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Codeur de modèle IA</h4>
                  <p className="text-gray-600 italic">Braintrust | 04.2024 - present</p>
                </div>
                <ul className="text-gray-700 list-disc ml-4">
                  <li>Évaluation des résultats de prompts IA, identification et
                  résolution des erreurs dans le code Java généré.</li>
                  <li>Création de prompts tests pour évaluer la résolution de
 problèmes, incluant des techniques avancées comme la
 récursivité etle backtracking.</li>
                </ul>
              </div>
              
              <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">développeur back-end Web (spring boot)</h4>
                  <p className="text-gray-600 italic">Arrity technologities | 11.2020 - 08.2021</p>
                </div>
                <ul className="text-gray-700 list-disc ml-4">
                  <li>Concevoir des API RESTful et implémenter une logique
                  métier avec Spring Boot.</li>
                  <li>Intégration et gestion efficaces de bases de données via
                  Hibernate/JPA.</li>
                  <li> Utiliser des bases de données relationnelles comme MySQL
 ou PostgreSQL pour le stockage et la récupération des
 données.</li>
                  <li>Implémenter des fonctionnalités de sécurité avec Spring
                  Security.</li>
                  <li>Participer aux tests unitaires et d'intégration avec JUnit et
                  Mockito.</li>
                  <li>Collaborer avec une équipe utilisant Git pour le contrôle des
                  versions et les méthodologies Agile pour la gestion de projet</li>
                </ul>
              </div>
              
              <div className="relative border-l-2 border-blue-500 pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">développeur web full stack</h4>
                  <p className="text-gray-600 italic">projet d'étude | 10.2022 - 07.2023</p>
                </div>
                <ul className="text-gray-700 list-disc ml-4">
                  <li>Spring Security pour l'authentification des utilisateurs et le
                  contrôle d'accès basé sur les rôles.</li>
                  <li>WebSocket pour la fonctionnalité de chat en temps réel entre
                  les clients et les administrateurs.</li>
                  <li> Un traducteur de chatbot utilisant l'API DeepL pour des
                  services de traduction instantanée.</li>
                  <li>Hibernate et SQL Server pour la gestion de base de données
                  et le stockage de documents.</li>
                  <li>Un système de notification pour alerter les administrateurs
                  des nouve les demandes de traduction.</li>
                  </ul>
                  <div className="flex space-x-3">
                  <a 
                    href="https://github.com/abdo90-dev/fullstuck" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                  <a 
                    href="https://traduction-dkc2.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div></div>
            </div>
            
            {/* Education */}
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Education</h3>
              
              <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Baccalauréat en informatique</h4>
                  <p className="text-gray-600 italic">Université de Mohamed Boudiaf | 2010 - 2013</p>
                </div>
                <p className="text-gray-700">
                J'ai obtenu une licence en informatique à l'Université Mohamed Boudiaf de M'Sila, avec une spécialisation en développement logiciel et technologies du cloud.
                </p>
              </div>
              
              <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Baccalauréat en informatique</h4>
                  <p className="text-gray-600 italic">West university of timisoara | 2020 - 2023</p>
                </div>
                <p className="text-gray-700">
                J'ai obtenu une licence en informatique à l'Université de l'Ouest de Timișoara, où j'ai développé des compétences en programmation, intelligence artificielle et technologies du cloud. 
                </p>
              </div>
              
   
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                  alt="School Administration System" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Système d'administration scolaire</h3>
                <p className="text-gray-600 mb-4">
                Un système de gestion scolaire complet construit avec Next.js, Firebase.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Next.js</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Firebase</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://nextjs-project-ten-gamma.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href="https://github.com/abdo90-dev/ecole-administration" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="School Administration Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tableau de bord de l'administration scolaire</h3>
                <p className="text-gray-600 mb-4">
                Un tableau de bord administratif pour la gestion scolaire avec authentification et accès basé sur les rôles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Express</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Firebase</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://ecole-administration-pt9uxspge-abdelhaks-projects-126ac63c.vercel.app/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href="https://github.com/abdo90-dev/ecole-administration" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1624&q=80" 
                  alt="Mobile App" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                <p className="text-gray-600 mb-4">
                Une application mobile de fitness développée avec React Native et Firebase, offrant suivi des entraînements, gestion des abonnements et coaching personnalisé.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">React Native</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Firebase</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Redux</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Expo</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/abdo90-dev/mobileapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                  alt="Private School Website" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">école privé</h3>
                <p className="text-gray-600 mb-4">
                Une application de bureau pour une école privée, avec gestion des cours et fonctionnalités d'inscription.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Java swing</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">MySQL</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/abdo90-dev/private-school" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="E-commerce Platform" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Plateforme E-commerce</h3>
                <p className="text-gray-600 mb-4">
                Une plateforme e-commerce complète avec gestion des produits, panier et intégration des paiements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Node.js</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">MongoDB</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Stripe</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/abdo90-dev/shopping-online" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80" 
                  alt="Translation Service" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Translation Service</h3>
                <p className="text-gray-600 mb-4">
                Cette thèse présente le développement d'une plateforme web de traduction de documents utilisant Java Spring Boot et Angular. Elle permet une communication fluide entre clients et administrateurs avec des fonctionnalités telles que la soumission de documents, la gestion de profil, le suivi des documents envoyés/ reçus, et un chat en temps réel. Un chatbot de traduction est intégré pour des services rapides, et le système notifie l'administrateur des nouvelles demandes de traduction. La plateforme vise à améliorer l'interaction et l'expérience utilisateur.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Java</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Typescript</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">SQL server</span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Angular</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring Boot</span>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring Security</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring Data JPA</span>
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring WebSocket</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/abdo90-dev/fullstuck" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center"
                  >
                    <GitHub size={16} className="mr-1" /> GitHub
                  </a>
                  <a 
                    href="https://traduction-dkc2.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          
 
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Oracle java programmer</h3>
                  <p className="text-gray-600">programmateur java</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
              J'ai obtenu la certification Oracle Certified Associate, Java SE 8 Programmer, attestant de mes connaissances en concepts orientés objet, en langage de programmation Java, ainsi qu'une compréhension générale des plateformes et technologies Java.
              </p>
              <a 
                href="https://www.credly.com/badges/7843a00f-6f79-4665-b102-2f3fa3ed58cc/linked_in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
              >
                <ExternalLink size={14} className="mr-1" /> Voir les informations d'identification
              </a>
            </div>
            
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Certificat DevOps</h3>
                  <p className="text-gray-600">Docker, Kubernetes.</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
              c'est un stage de 3 mois en DevOps
              </p>
              <a 
                href="https://drive.google.com/file/d/18aSFzo_UmIrexGzHCJv572AnGYmpy4UU/view?pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
              >
                <ExternalLink size={14} className="mr-1" /> Voir les informations d'identification
              </a>
            </div>
    
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-700 mb-8">
              N'hésitez pas à me contacter pour toute demande de renseignements, discuter de projets ou simplement pour me dire bonjour ! Je suis actuellement à la recherche d'opportunités professionnelles en tant que développeur web et reste ouvert à de nouvelles collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-700">haddadiabdelhak64@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-md mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telephone</h4>
                    <p className="text-gray-700">+33759317579</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-md mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Localisation</h4>
                    <p className="text-gray-700">Paris, France</p>
                  </div>
                </div>
                
     
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connectez-vous avec moi: </h4>
                <div className="flex space-x-4">
                  <a 
                    href="http://linkedin.com/in/abdelhak-haddadi-babb6b1ba/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/abdo90-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition"
                  >
                    <GitHub size={20} />
                  </a>
                  <a 
                    href="mailto:haddadiabdelhak64@gmail.com" 
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-6">Envoie-moi un message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Abdelhak<span className="text-blue-400">.dev</span></h3>
              <p className="text-gray-400 mt-2">Créer des expériences numériques qui comptent.</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="http://linkedin.com/in/abdelhak-haddadi-babb6b1ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/abdo90-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="mailto:haddadiabdelhak64@gmail.com" 
                className="text-gray-400 hover:text-white transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <hr className="border-gray-700 my-6" />
          
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 2025 Abdelhak Haddadi. Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;