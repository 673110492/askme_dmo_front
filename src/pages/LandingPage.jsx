import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Shield,
  Users,
  Zap,
  Eye,
  EyeOff,
  Lock,
  Send,
  Star,
  CheckCircle,
  Globe,
  Smartphone,
  Clock,
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Play,
  Trash2, // Changez Trash en Trash2
  HelpCircle,
} from "lucide-react";

export const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "100% Anonyme",
      description:
        "Vos conversations restent complètement privées et sécurisées",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: MessageCircle,
      title: "Messages Instantanés",
      description: "Envoyez et recevez des messages en temps réel",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Users,
      title: "Communauté Active",
      description:
        "Rejoignez des milliers d'utilisateurs qui partagent en toute liberté",
      image:
        "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Étudiante",
      content:
        "Grâce à mon lien AskMe, j'ai pu recevoir des conseils précieux et des encouragements anonymes. Les gens sont plus honnêtes quand ils peuvent s'exprimer librement !",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      verified: true,
      messagesReceived: "150+",
    },
    {
      name: "Marc L.",
      role: "Créateur de contenu",
      content:
        "AskMe m'a permis de créer une vraie connexion avec mon audience. Les messages anonymes que je reçois m'aident à mieux comprendre ce que pensent vraiment mes followers.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      verified: true,
      messagesReceived: "500+",
    },
    {
      name: "Julie K.",
      role: "Influenceuse",
      content:
        "L'anonymat total d'AskMe libère la parole. Je reçois des confessions touchantes et des questions sincères que mes followers n'oseraient jamais poser publiquement.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      verified: true,
      messagesReceived: "1000+",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Générez votre lien unique",
      description:
        "Créez instantanément votre lien personnalisé AskMe en quelques secondes. Aucune inscription complexe requise.",
      icon: Users,
      image:
        "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      step: 2,
      title: "Partagez votre lien",
      description:
        "Diffusez votre lien sur vos réseaux sociaux, dans votre bio ou envoyez-le à vos contacts pour recevoir des messages anonymes.",
      icon: Globe,
      image:
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      step: 3,
      title: "Recevez des messages anonymes",
      description:
        "Les personnes peuvent vous envoyer des messages, questions ou confessions en toute anonymité via votre lien.",
      icon: MessageCircle,
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const faqs = [
    {
      question: "Comment puis-je recevoir des messages anonymes ?",
      answer:
        "Il vous suffit de générer votre lien personnalisé sur AskMe et de le partager. Les personnes pourront vous envoyer des messages complètement anonymes via ce lien.",
    },
    {
      question: "Puis-je savoir qui m'a envoyé un message ?",
      answer:
        "Non, l'anonymat est total. Vous recevrez les messages sans aucune information sur l'identité de l'expéditeur. C'est le principe fondamental d'AskMe.",
    },
    {
      question: "Comment partager mon lien AskMe ?",
      answer:
        "Une fois votre lien généré, vous pouvez le partager sur vos réseaux sociaux, dans votre bio, ou l'envoyer directement à vos contacts. Le lien reste actif en permanence.",
    },
    {
      question:
        "Y a-t-il une limite au nombre de messages que je peux recevoir ?",
      answer:
        "Avec le plan gratuit, vous pouvez recevoir des messages illimités. Les plans premium offrent des fonctionnalités supplémentaires comme la priorisation et les statistiques.",
    },
  ];
  const pricingPlans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      features: [
        "Lien personnalisé unique",
        "Messages anonymes illimités",
        "Interface intuitive",
        "Notifications en temps réel",
      ],
      popular: false,
      badge: "Pour commencer",
    },
    {
      name: "Premium",
      price: "4.99€",
      period: "/mois",
      features: [
        "Tout du plan gratuit",
        "Personnalisation du profil",
        "Statistiques détaillées",
        "Support prioritaire",
        "Thèmes exclusifs",
      ],
      popular: true,
      badge: "Le plus populaire",
    },
    {
      name: "Pro",
      price: "9.99€",
      period: "/mois",
      features: [
        "Tout du plan Premium",
        "Liens multiples",
        "Analytics avancées",
        "API complète",
        "Support dédié 24/7",
      ],
      popular: false,
      badge: "Pour les créateurs",
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Chiffrement End-to-End",
      description: "Tous vos messages sont chiffrés avant d'être envoyés",
    },
    {
      icon: EyeOff,
      title: "Aucune Trace",
      description: "Nous ne stockons aucun log ou historique de vos activités",
    },
    {
      icon: Shield,
      title: "Serveurs Sécurisés",
      description:
        "Infrastructure hébergée dans des centres de données certifiés",
    },
    {
      icon: Globe,
      title: "Anonymisation IP",
      description: "Votre adresse IP est automatiquement masquée",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Navigation */}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-slate-900/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AskMe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a
                href="#features"
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                Fonctionnalités
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/home"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Créer un compte
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-purple-300 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#features"
                className="block text-gray-300 hover:text-purple-300 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="#about"
                className="block text-gray-300 hover:text-purple-300 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-purple-300 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/home"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Créer un compte
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20"
      >
        {/* Main Content Container */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header Section */}
          <header className="mb-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Lock className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200">
                Messagerie 100% Anonyme
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Communiquez
              <br />
              <span className="text-purple-300">sans laisser de traces</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Partagez vos pensées les plus intimes, envoyez des messages
              sensibles ou exprimez-vous librement sans révéler votre identité.
              Votre vie privée est sacrée.
            </p>
          </header>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Envoyer un message</span>
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
              <Play className="w-5 h-5" />
              <span>Comment ça marche</span>
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Anonymat Total
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Aucune inscription, aucun nom, aucune trace. Vos messages sont
                entièrement anonymes et impossibles à retracer.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Sécurité Maximale
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Chiffrement militaire, serveurs sécurisés et destruction
                automatique des messages. Votre confidentialité avant tout.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Liberté d'Expression
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Partagez vos secrets, confessions ou pensées profondes sans
                jugement ni conséquences. Soyez authentique.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-purple-300 mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Messages anonymes</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-pink-300 mb-2">12K+</div>
            <div className="text-gray-400 text-sm">Utilisateurs protégés</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-300 mb-2">0</div>
            <div className="text-gray-400 text-sm">Données stockées</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-green-300 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Anonymat garanti</div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-12">
          <Shield className="w-4 h-4 text-green-400" />
          <span>
            Messages éphémères • Chiffrement bout-à-bout • Aucune surveillance •
            Liberté totale
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-purple-200 font-medium">
                Protection Maximale
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent leading-tight">
              Votre intimité,
              <br />
              <span className="text-purple-300">notre obsession</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment nous révolutionnons la communication anonyme
              avec des fonctionnalités pensées pour votre liberté d'expression
              et votre sécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-lg border border-white/10 rounded-3xl transform transition-all duration-700 hover:scale-105 hover:border-purple-400/30 cursor-pointer ${
                    currentFeature === index
                      ? "ring-2 ring-purple-400/50 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent scale-105 shadow-2xl shadow-purple-500/20"
                      : "hover:shadow-xl hover:shadow-purple-500/10"
                  }`}
                  onMouseEnter={() =>
                    setCurrentFeature && setCurrentFeature(index)
                  }
                >
                  {/* Gradient Orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Feature Image */}
                  <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center space-x-2 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium">
                        En savoir plus
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">
                  Chiffrement AES-256
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">
                  Serveurs sécurisés
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Aucun tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trash2 className="w-5 h-5 text-pink-400" /> 
                <span className="text-sm text-gray-300">Auto-destruction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sécurité de niveau militaire
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Votre vie privée est notre obsession. Découvrez comment nous
              protégeons vos données.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mb-4 inline-flex p-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section - Design amélioré */}
      <section id="how-it-works" className="py-20 px-6 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-200">
                3 étapes simples
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Comment ça marche ?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Créez votre lien personnalisé et commencez à recevoir des messages
              anonymes en quelques minutes
            </p>
          </div>

          <div className="space-y-20">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-16`}
                >
                  <div className="lg:w-1/2 space-y-8">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-500/25">
                          {step.step}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
                        <Icon className="w-8 h-8 text-purple-300" />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex items-center space-x-4">
                        <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-xl text-purple-300 hover:text-purple-200 hover:border-purple-400/50 transition-all duration-300 group">
                          <span className="font-medium">Découvrir plus</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {index < howItWorks.length - 1 && (
                          <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-500">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                            <span>Étape suivante</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>

                        {/* Floating badge */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Étape {step.step}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mt-16 space-x-4">
            {howItWorks.map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                {index < howItWorks.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez comment AskMe a transformé la façon dont nos
              utilisateurs communiquent en toute confidentialité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-purple-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Design amélioré */}
      <section id="pricing" className="py-20 px-6 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-800/30 to-blue-800/30 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-3 mb-8">
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-200">
                Plans flexibles
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Choisissez votre plan
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Commencez gratuitement et débloquez plus de fonctionnalités selon
              vos besoins.
              <br className="hidden md:block" />
              <span className="text-purple-300 font-medium">
                Anonymat total garanti sur tous les plans
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${
                  plan.popular ? "lg:-mt-4 lg:mb-4" : ""
                }`}
              >
                {/* Popular plan glow effect */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                )}

                <div
                  className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-400/50 shadow-2xl shadow-purple-500/10"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-slate-800 text-gray-300 border border-slate-600"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-8 pt-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span
                        className={`text-5xl md:text-6xl font-bold ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>

                    {plan.name === "Gratuit" && (
                      <p className="text-green-400 text-sm font-medium">
                        Essai sans engagement
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`p-1 rounded-full ${
                            plan.popular
                              ? "bg-purple-500/20"
                              : "bg-green-500/20"
                          }`}
                        >
                          <CheckCircle
                            className={`w-4 h-4 ${
                              plan.popular
                                ? "text-purple-400"
                                : "text-green-400"
                            }`}
                          />
                        </div>
                        <span className="text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/30"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/30"
                    }`}
                  >
                    {plan.name === "Gratuit"
                      ? "Commencer gratuitement"
                      : "Choisir ce plan"}
                  </button>

                  {/* Additional info */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      {plan.name === "Gratuit"
                        ? "Aucune carte bancaire requise"
                        : "Annulation à tout moment"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-400 mb-4">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Garantie satisfait ou remboursé 30 jours</span>
            </div>
            <p className="text-gray-500 text-sm">
              Toutes les fonctionnalités incluent un anonymat complet et une
              sécurité maximale
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <HelpCircle className="w-5 h-5 text-purple-300" />
              <span className="text-sm text-purple-200 font-medium">
                Vos Questions, Nos Réponses
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent leading-tight">
              Tout savoir sur
              <br />
              <span className="text-purple-300">l'anonymat total</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment nous protégeons votre identité et garantissons
              une communication 100% anonyme et sécurisée.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/30 transition-all duration-500 hover:bg-white/10"
              >
                <button
                  className="w-full px-8 py-8 text-left flex justify-between items-start gap-4 hover:bg-white/5 transition-colors duration-300 group-hover:bg-transparent"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                      {index + 1}
                    </div>
                    <span className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 leading-relaxed">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-300 transition-all duration-300 flex-shrink-0 mt-2 ${
                      expandedFaq === index
                        ? "rotate-180 text-pink-300"
                        : "group-hover:text-white"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFaq === index ? "max-h-96 pb-8" : "max-h-0"
                  }`}
                >
                  <div className="px-8 ml-12">
                    <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-purple-600/20 via-purple-800/15 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-4xl p-12 md:p-16 shadow-2xl shadow-purple-500/10">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-800/40 to-emerald-800/40 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm text-green-200 font-medium">
                  Prêt en 30 secondes
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent leading-tight">
                Commencez à communiquer
                <br />
                <span className="text-purple-300">en toute liberté</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Rejoignez des milliers d'utilisateurs qui font confiance à notre
                plateforme pour leurs conversations les plus sensibles et
                personnelles.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg border border-purple-400/20">
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                <span>Envoyer mon premier message</span>
              </button>

              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg">
                <Eye className="w-6 h-6" />
                <span>Découvrir la démo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <Lock className="w-8 h-8 text-purple-300" />
                <span className="text-sm text-gray-300 font-medium">
                  Chiffrement AES-256
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <Shield className="w-8 h-8 text-blue-300" />
                <span className="text-sm text-gray-300 font-medium">
                  Serveurs sécurisés
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <EyeOff className="w-8 h-8 text-green-300" />
                <span className="text-sm text-gray-300 font-medium">
                  Aucun tracking
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <Trash2 className="w-8 h-8 text-pink-300" />
                <span className="text-sm text-gray-300 font-medium">
                  Auto-destruction
                </span>
              </div>
            </div>

            {/* Security Note */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>
                Aucune inscription requise • Messages éphémères • Anonymat
                garanti à vie
              </span>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Vous avez encore des doutes sur la sécurité ?
            </p>
            <button className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center justify-center space-x-2 mx-auto group">
              <span>Consulter notre politique de confidentialité</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une question ? Une suggestion ? Notre équipe est là pour vous
              aider.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">support@askme.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                  <Phone className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-300">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-300">
                    123 Avenue des Champs-Élysées
                    <br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AskMe
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                La plateforme de messagerie anonyme qui respecte votre vie
                privée.
              </p>
              <div className="flex space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Sécurisé • Anonyme • Fiable</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sécurité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Communauté
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sécurité
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AskMe. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Smartphone className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
