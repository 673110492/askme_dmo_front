import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
        "AskMe m'a permis de poser des questions sur des sujets sensibles sans avoir peur du jugement. C'est libérateur !",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Marc L.",
      role: "Professionnel",
      content:
        "Interface intuitive et sécurité au top. Je recommande vivement cette plateforme pour les discussions confidentielles.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Julie K.",
      role: "Créatrice",
      content:
        "La communauté est bienveillante et l'anonymat me permet d'être vraiment authentique dans mes échanges.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Créez votre profil anonyme",
      description: "Aucune information personnelle requise",
      icon: Users,
      image:
        "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      step: 2,
      title: "Posez vos questions",
      description: "Partagez vos préoccupations en toute sécurité",
      icon: MessageCircle,
      image:
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      step: 3,
      title: "Recevez des réponses",
      description: "La communauté vous aide avec bienveillance",
      icon: CheckCircle,
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const faqs = [
    {
      question: "Mes données sont-elles vraiment sécurisées ?",
      answer:
        "Oui, nous utilisons un chiffrement de bout en bout et ne stockons aucune information personnelle. Votre anonymat est garanti à 100%.",
    },
    {
      question: "Comment fonctionne le système d'anonymat ?",
      answer:
        "Chaque utilisateur reçoit un identifiant unique généré aléatoirement. Aucun lien avec votre identité réelle n'est conservé.",
    },
    {
      question: "Y a-t-il des modérateurs sur la plateforme ?",
      answer:
        "Oui, notre équipe de modération veille au respect de nos règles communautaires pour maintenir un environnement sain et respectueux.",
    },
    {
      question: "L'application est-elle gratuite ?",
      answer:
        "AskMe propose un accès gratuit avec toutes les fonctionnalités essentielles. Des options premium sont disponibles pour plus de fonctionnalités.",
    },
  ];

  const pricingPlans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      features: [
        "Messages illimités",
        "Anonymat complet",
        "Support communautaire",
        "Interface mobile",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "4.99€",
      period: "/mois",
      features: [
        "Tout du plan gratuit",
        "Messages prioritaires",
        "Thèmes personnalisés",
        "Support 24/7",
        "Statistiques avancées",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "9.99€",
      period: "/mois",
      features: [
        "Tout du plan Premium",
        "Groupes privés",
        "API access",
        "Analytics détaillées",
        "Manager dédié",
      ],
      popular: false,
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

<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrollY > 50 ? "bg-slate-900/90 backdrop-blur-md" : "bg-transparent"
}`}>
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
              Posez vos questions
              <br />
              <span className="text-purple-300">sans vous révéler</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              AskMe vous permet de poser des questions sensibles, partager vos
              pensées et recevoir des conseils en toute confidentialité. Votre
              anonymat est notre priorité.
            </p>
          </header>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Commencer maintenant</span>
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
              <Play className="w-5 h-5" />
              <span>Voir la démo</span>
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
                Aucune inscription requise. Vos messages sont complètement
                anonymes et ne peuvent être retracés vers vous.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Sécurisé
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Chiffrement de bout en bout et aucune donnée personnelle
                stockée. Votre confidentialité est garantie.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Instantané
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Posez vos questions et recevez des réponses rapidement.
                Disponible 24h/24 et 7j/7.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-purple-300 mb-2">15K+</div>
            <div className="text-gray-400 text-sm">Messages envoyés</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-pink-300 mb-2">8K+</div>
            <div className="text-gray-400 text-sm">Utilisateurs actifs</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-300 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Anonymat garanti</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-green-300 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Disponibilité</div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-12">
          <Shield className="w-4 h-4 text-green-400" />
          <span>
            Chiffrement de bout en bout • Aucune donnée stockée • Anonymat total
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
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Pourquoi choisir AskMe ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les fonctionnalités qui font d'AskMe la plateforme de
              messagerie anonyme la plus sûre et conviviale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                    currentFeature === index
                      ? "ring-2 ring-purple-400 bg-white/10 scale-105"
                      : ""
                  }`}
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
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

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Commencez à utiliser AskMe en trois étapes simples. C'est rapide,
              facile et totalement sécurisé.
            </p>
          </div>

          <div className="space-y-16">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12`}
                >
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                        <Icon className="w-6 h-6 text-purple-300" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold">{step.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    <button className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors group">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Choisissez votre plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Commencez gratuitement et évoluez selon vos besoins. Tous les
              plans incluent un anonymat total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400 ring-2 ring-purple-400"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Commencer maintenant
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-300">
              Trouvez les réponses aux questions les plus courantes sur AskMe.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-8">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui font confiance à AskMe
              pour leurs conversations confidentielles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Inscription gratuite</span>
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg">
                <Eye className="w-5 h-5" />
                <span>Explorer d'abord</span>
              </button>
            </div>
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
