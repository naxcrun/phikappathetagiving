import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, Shield, Star, CheckCircle2, ArrowDown, 
  ChevronLeft, ChevronRight, ChevronDown, Target, Phone, Mail,
  HeartHandshake, GraduationCap, Home, Globe, TrendingUp
} from 'lucide-react';

// Custom Brand Icons
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

// Brand Colors & Assets
const HERO_LOGO_URL = "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/PhiKapsLogo.png?raw=true";
const ALT_LOGO_URL = "https://raw.githubusercontent.com/naxcrun/static-assets/refs/heads/main/PHIKAPSfooterlogo.png";
const LIGHT_LOGO_URL = "https://github.com/naxcrun/static-assets/blob/main/PKTLetters_CardinalPurple.png?raw=true";
const DARK_LOGO_URL = "https://github.com/naxcrun/static-assets/blob/main/PKTLetters_White.png?raw=true";
const DONATE_LINK = "https://dayofgiving.purdue.edu/campaigns/phi-kappa-theta-48e3e2cf-4f67-4490-aa57-e38669b136e2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Our Impact', id: 'impact' },
    { label: 'Funding Priorities', id: 'priorities' },
    { label: 'Giving Goals', id: 'goals' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <header className="fixed w-full z-40 p-3 sm:p-6 flex justify-between items-center pointer-events-none">
        <div 
          onClick={() => scrollToSection('home')}
          className="bg-white/90 backdrop-blur rounded-full px-5 sm:px-6 h-10 sm:h-12 shadow-md pointer-events-auto cursor-pointer flex items-center justify-center shrink-0"
        >
          <img src={LIGHT_LOGO_URL} alt="Phi Kappa Theta" className="h-4 sm:h-7 object-contain scale-[1.6] sm:scale-[1.8] origin-center block mx-auto" />
          <span className="ml-4 md:ml-6 pl-3 border-l-2 border-[#d6ad60] text-[#711a12] font-bold text-xs sm:text-sm hidden md:flex items-center h-5 sm:h-6">
            Purdue Day of Giving
          </span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto shrink-0">
          <button 
            onClick={() => scrollToSection('donate')}
            className="hidden md:flex items-center justify-center bg-[#711a12] text-white font-bold px-5 sm:px-6 h-10 sm:h-12 rounded-full shadow-md hover:bg-[#4a110c] transition-colors whitespace-nowrap text-sm sm:text-base shrink-0"
          >
            Give Now
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="bg-white text-gray-900 font-bold px-4 sm:px-5 h-10 sm:h-12 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base shrink-0"
          >
            Menu <Menu size={18} className="ml-1 sm:ml-2 sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      {/* Mobile/Full Menu */}
      <div className={`fixed inset-0 bg-[#2a0906] text-white z-50 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-full flex flex-col">
            <div className="flex justify-between items-center">
               <img src={DARK_LOGO_URL} alt="Phi Kappa Theta" className="h-8 sm:h-10 object-contain scale-[1.8] origin-left ml-2" />
               <button onClick={() => setIsMenuOpen(false)} className="bg-white text-[#711a12] font-bold px-4 py-2 rounded-full flex items-center hover:bg-gray-200">
                  Close <X size={16} className="ml-1" />
               </button>
            </div>

            <div className="flex-grow flex items-center justify-center">
               <ul className="space-y-8 text-center flex flex-col items-center">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => scrollToSection(link.id)}
                        className="group relative inline-flex items-center text-4xl sm:text-5xl font-bold hover:text-[#d6ad60] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="absolute -right-12 sm:-right-16 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#d6ad60]" size={36} />
                      </button>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="https://phik.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center text-4xl sm:text-5xl font-bold hover:text-[#d6ad60] transition-colors"
                    >
                      <span>Chapter Site</span>
                      <ArrowRight className="absolute -right-12 sm:-right-16 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#d6ad60] -rotate-45" size={36} />
                    </a>
                  </li>
                  <li className="pt-8 w-full sm:w-auto text-center">
                    <button 
                      onClick={() => scrollToSection('donate')}
                      className="bg-[#d6ad60] text-[#2a0906] text-xl sm:text-2xl font-bold px-8 py-3 sm:px-10 sm:py-4 rounded-full hover:bg-white transition-colors w-full sm:w-auto"
                    >
                      Make Your Gift Today
                    </button>
                  </li>
               </ul>
            </div>
         </div>
      </div>
    </>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Purdue Day of Giving: April 29, midnight EDT
    const targetDate = new Date('2026-04-29T00:00:00-04:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md rounded-xl p-2 sm:p-3 min-w-[60px] sm:min-w-[80px] border border-[#d6ad60]/30 shadow-[0_0_15px_rgba(214,173,96,0.15)]">
          <span className="text-2xl sm:text-4xl font-black text-white leading-none mb-1">{value.toString().padStart(2, '0')}</span>
          <span className="text-[9px] sm:text-xs font-bold text-[#d6ad60] uppercase tracking-widest">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 opacity-60">
          <source src="https://raw.githubusercontent.com/naxcrun/static-assets/main/header.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative w-full h-full bg-[#711a12]/85 backdrop-blur-sm flex flex-col items-center justify-center z-20 pointer-events-auto px-4 pb-[6vw]"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6vw), 50% 100%, 0 calc(100% - 6vw))'
        }}>
        <div className="container mx-auto text-center w-full max-w-5xl flex flex-col items-center justify-center">
          <img src={HERO_LOGO_URL} alt="Phi Kappa Theta Logo" className="block mx-auto w-[70%] sm:w-[80%] max-w-[280px] md:max-w-[380px] lg:max-w-[450px] -mb-10 sm:-mb-16 md:-mb-20 drop-shadow-2xl object-contain animate-fade-in-up relative z-0" />
          
          <div className="relative z-10 w-full flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#d6ad60] text-[#2a0906] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-5 shadow-lg mx-auto">
              <Star size={14} fill="currentColor" /> Purdue Day of Giving <Star size={14} fill="currentColor" />
            </div>
            <p className="text-lg md:text-2xl text-white mb-5 sm:mb-6 font-bold tracking-wide max-w-2xl mx-auto drop-shadow-lg leading-snug">
              The Rebirth of Indiana Zeta. Empower the Next Generation.
            </p>
            
            <Countdown />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-none mx-auto">
              <button 
                onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#711a12] font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-xl hover:bg-gray-100 transition-colors text-sm sm:text-base uppercase tracking-wide transform hover:scale-105 duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <HeartHandshake size={18} /> Donate Now
              </button>
              <button 
                onClick={() => document.getElementById('priorities').scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base uppercase tracking-wide w-full sm:w-auto"
              >
                View Priorities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out exponential curve for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const carouselImages = [
    "https://github.com/naxcrun/static-assets/blob/main/ba.png?raw=true",
    "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/carousel-brotherhood.JPEG?raw=true",
    "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/hero-home-1.JPEG?raw=true",
    "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/hero-home-2.jpg?raw=true"
  ];
  
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentImgIndex((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentImgIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section id="impact" className="pb-16 sm:pb-24 bg-[#fcfaf7] relative z-20 -mt-[6vw] pt-[12vw]" style={{ clipPath: 'polygon(0 0, 50% 6vw, 100% 0, 100% 100%, 0 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-0.5 bg-[#d6ad60]"></div>
              <span className="text-sm font-bold text-[#711a12] tracking-widest uppercase">State of the Chapter</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#711a12] leading-tight">
              A Historic<br />Return.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              After returning to campus this year, Indiana Zeta is experiencing a true rebirth. We are building a new legacy on the foundation of our storied past, developing men of strong moral character, intellectual curiosity, and servant leadership.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg pb-2">
              As we lay the groundwork for our re-founded chapter, Purdue Day of Giving is our most critical initiative. Your support ensures we can fund essential programming, establish our operations, and provide scholarships to the founding fathers writing our next chapter.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-gray-200 max-w-lg">
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#d6ad60] transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-[#711a12] mb-1">
                  <AnimatedCounter end={22} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#d6ad60] uppercase tracking-wider">New Members (Year 1)</div>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#d6ad60] transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-[#711a12] mb-1">
                  <AnimatedCounter end={1000} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#d6ad60] uppercase tracking-wider">Service Hours</div>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#d6ad60] transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-[#711a12] mb-1">
                  <AnimatedCounter end={15} prefix="$" suffix="k" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#d6ad60] uppercase tracking-wider">In Scholarships</div>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#d6ad60] transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-[#711a12] mb-1">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#d6ad60] uppercase tracking-wider">PNMs Reached</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative group">
            <div className="w-full h-[600px] rounded-[3rem] shadow-2xl overflow-hidden relative bg-[#2a0906]">
              {carouselImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Chapter Impact ${idx + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                />
              ))}
              
              {/* Carousel Controls */}
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:outline-none">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:outline-none">
                <ChevronRight size={24} />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
                {carouselImages.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${idx === currentImgIndex ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/40 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PrioritiesSection = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const areas = [
    { 
      title: "Chapter Operations", 
      desc: "Provide the critical seed funding needed to establish our new chapter's foundation. Gifts to this fund ensure a competitive, enriching, and welcoming brotherhood environment for our re-founding fathers and future members.", 
      icon: <Shield className="text-[#d6ad60] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />,
      image: "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/carousel-brotherhood.JPEG?raw=true"
    },
    { 
      title: "Academic Scholarships", 
      desc: "Reward excellence in the classroom. Your donations directly support brothers who demonstrate outstanding academic achievement while balancing fraternal and campus leadership roles.", 
      icon: <GraduationCap className="text-[#d6ad60] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />,
      image: "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/dev-intellectual.jpg?raw=true"
    },
    { 
      title: "Leadership Development", 
      desc: "Fund sending our executive board and rising leaders to regional and national leadership conferences, as well as supporting our internal LEAD programming for new members.", 
      icon: <Target className="text-[#d6ad60] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />,
      image: "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/dev-leadership.JPEG?raw=true"
    },
    { 
      title: "Spiritual & Service Events", 
      desc: "Support our core mission by funding chapter retreats, spiritual development programs, and philanthropic events that benefit the broader West Lafayette community.", 
      icon: <Globe className="text-[#d6ad60] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />,
      image: "https://github.com/naxcrun/phikappatheta/blob/gh-pages/images/dev-spiritual.JPEG?raw=true"
    }
  ];

  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedArea(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="priorities" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#711a12] mb-4 sm:mb-6">Where Your Gift Goes</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Every dollar raised during Purdue Day of Giving directly supports our re-founding efforts and benefits the undergraduate experience. Choose an area of impact that resonates most with your legacy.
          </p>
        </div>
        
        <div className="relative">
          {/* Left Side Scroll Arrow */}
          <div className={`absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none flex items-center justify-start pl-2 sm:pl-4 transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={() => scroll('left')} className="bg-[#711a12] text-white rounded-full p-2 shadow-lg hover:bg-[#2a0906] transition-transform transform hover:scale-110 active:scale-95 pointer-events-auto" aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Right Side Scroll Arrow */}
          <div className={`absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none flex items-center justify-end pr-2 sm:pr-4 transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={() => scroll('right')} className="bg-[#711a12] text-white rounded-full p-2 shadow-lg hover:bg-[#2a0906] transition-transform transform hover:scale-110 active:scale-95 pointer-events-auto" aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          </div>

          <div ref={scrollContainerRef} onScroll={checkScroll} className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory items-stretch scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {areas.map((area, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedArea(area)}
                className="shrink-0 w-72 sm:w-80 lg:w-96 snap-center bg-[#fcfaf7] p-8 rounded-[2rem] border border-gray-100 hover:border-[#d6ad60] transition-colors group text-left flex flex-col focus:outline-none focus:ring-2 focus:ring-[#d6ad60] focus:ring-offset-2"
              >
                {area.icon}
                <h3 className="text-2xl font-bold text-[#2a0906] mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">{area.desc}</p>
                <div className="flex items-center text-[#d6ad60] font-bold text-sm uppercase tracking-widest mt-auto">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedArea && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedArea(null)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all animate-fade-in-up">
            <button 
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] relative bg-[#2a0906]">
              <img src={selectedArea.image} alt={selectedArea.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-[#fcfaf7]">
               <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-[#d6ad60]"></span>
                  <span className="text-sm font-bold text-[#d6ad60] tracking-widest uppercase">Funding Priority</span>
               </div>
               <h3 className="text-4xl sm:text-5xl font-bold text-[#711a12] mb-6">{selectedArea.title}</h3>
               <p className="text-lg text-gray-700 leading-relaxed mb-8">
                 {selectedArea.desc}
               </p>
               <button 
                 onClick={() => {
                   setSelectedArea(null);
                   document.getElementById('donate').scrollIntoView({ behavior: 'smooth' });
                 }} 
                 className="self-start bg-[#711a12] text-white font-bold px-8 py-3 rounded-full hover:bg-[#2a0906] transition-colors shadow-md flex items-center gap-2"
               >
                 <HeartHandshake size={18} /> Donate
               </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const GivingGoals = () => {
  const goals = [
    { 
      target: "Bonus Funds", 
      title: "Student Org Leaderboard", 
      desc: "Every unique donation helps us climb the Purdue Day of Giving Student Organization Participation Leaderboard. Finishing at the top earns our chapter significant bonus funds from the university!",
      icon: <TrendingUp size={24} className="text-[#d6ad60]" />
    },
    { 
      target: "Hourly Prizes", 
      title: "Most Gifts Challenges", 
      desc: "During specific hours throughout the day, the student organization that receives the highest number of individual donations wins an extra cash prize. Help us dominate these hours by giving early and often!",
      icon: <Target size={24} className="text-[#d6ad60]" />
    },
    { 
      target: "Social Media", 
      title: "Social Challenges", 
      desc: "Help us win bonus funds by participating in hourly social media challenges! Post your best Purdue selfie, pet picture, or 'Hail Purdue' video using #PurdueDayOfGiving and tag our chapter to help us win.",
      icon: <Globe size={24} className="text-[#d6ad60]" />
    }
  ];

  return (
    <section id="goals" className="py-16 sm:py-24 bg-[#2a0906] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d6ad60 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d6ad60] mb-4">Day of Giving Challenges</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Help us unlock bonus funds and maximize the impact of your donation by participating in official Purdue Day of Giving challenges.
          </p>
        </div>
        
        <div className="space-y-6">
          {goals.map((goal, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white/15 transition-colors">
              <div className="flex-shrink-0 text-center md:text-left md:w-48 bg-[#1f0604] p-4 rounded-2xl border border-[#d6ad60]/30 shadow-[0_0_15px_rgba(214,173,96,0.15)]">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  {goal.icon}
                  <span className="text-[#d6ad60] font-bold text-sm uppercase tracking-widest">Target</span>
                </div>
                <div className="text-white font-bold text-xl lg:text-2xl">{goal.target}</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{goal.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{goal.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <button 
             onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
             className="bg-transparent border-2 border-[#d6ad60] text-[#d6ad60] font-bold px-10 py-4 rounded-full hover:bg-[#d6ad60] hover:text-[#2a0906] transition-colors inline-flex items-center text-lg transform hover:scale-105 duration-200"
           >
             Help Us Reach Our Goals <ArrowRight size={20} className="ml-2" />
           </button>
        </div>
      </div>
    </section>
  );
};

const DonateSection = () => {
  return (
    <section id="donate" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#711a12] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d6ad60]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <HeartHandshake size={64} className="text-[#d6ad60] mb-6 drop-shadow-lg" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Make an Impact?
            </h2>
            
            <p className="text-[#fcfaf7] text-lg sm:text-xl max-w-2xl mx-auto mb-10 opacity-90">
              Your gift during Purdue Day of Giving ensures that the rebirth of Indiana Zeta is a resounding success. Click below to be redirected to the secure, official Purdue University giving portal.
            </p>
            
            <a 
              href={DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#d6ad60] text-[#2a0906] font-bold text-xl px-10 py-5 rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(214,173,96,0.4)] flex items-center gap-3 transform hover:-translate-y-1 duration-300"
            >
              Proceed to Giving Portal <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <div className="mt-8 pt-8 border-t border-white/20 w-full max-w-md">
               <p className="text-sm text-white/70">
                 All donations are processed securely by the Purdue for Life Foundation and are tax-deductible to the extent permitted by law.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. All gifts made during Purdue Day of Giving are processed through the Purdue for Life Foundation, a 501(c)(3) organization. You will receive a tax receipt via email immediately after your donation."
    },
    {
      question: "Will 100% of my gift go to the Phi Kappa Theta chapter?",
      answer: "Yes, when you designate your gift to the specific Phi Kappa Theta Indiana Zeta fund through the official portal, 100% of your donation is earmarked for our chapter's use without university overhead."
    },
    {
      question: "What specific projects are we funding this year?",
      answer: "Our primary goals are funding essential chapter operations for our re-founding year, expanding our academic scholarship endowments, and supporting brothers' attendance at national leadership conferences. Check out the 'Funding Priorities' section above for more details."
    },
    {
      question: "Can I make a pledge or set up a recurring gift?",
      answer: "While Purdue Day of Giving is focused on 24 hours of immediate impact, the giving portal allows you to set up recurring monthly or annual gifts. Larger multi-year pledges can be arranged by contacting our alumni board directly."
    },
    {
      question: "I want to give via check or stock transfer. Is that possible?",
      answer: "Yes! If you prefer not to donate online via credit card, you can participate via mail or wire transfer. Please reach out to our alumni treasurer or the Purdue for Life Foundation directly for specific mailing and routing instructions."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#711a12] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-base sm:text-lg">Everything you need to know about making your gift.</p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border ${openIndex === index ? 'border-[#d6ad60] bg-[#fcfaf7]' : 'border-gray-200 bg-white'} rounded-2xl transition-colors duration-300 overflow-hidden`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-bold text-[#2a0906] pr-4 sm:pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-[#d6ad60] transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-5 sm:pb-6' : 'max-h-0 opacity-0'} px-5 sm:px-6`}
              >
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#fcfaf7] relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#711a12] mb-4">Contact Us</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Have questions about your donation, employer matching, or how your gift will be utilized? Reach out to our team directly.
        </p>
        <a 
          href="mailto:give@phik.app" 
          className="inline-flex items-center justify-center gap-3 bg-white border-2 border-[#d6ad60] text-[#2a0906] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#d6ad60] hover:text-white transition-all shadow-sm group"
        >
          <Mail size={20} className="text-[#711a12] group-hover:text-white transition-colors" />
          give@phik.app
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#6e1e16] text-white relative z-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <img src={ALT_LOGO_URL} alt="Phi Kappa Theta" className="h-20 object-contain mb-4" />
             <p className="text-white font-medium mb-3">Indiana Zeta Chapter • Purdue University</p>
             <a href="https://phik.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-[#d6ad60] hover:text-white transition-colors">
               Visit Chapter Site <ArrowRight size={14} className="ml-1 -rotate-45" />
             </a>
          </div>
          <div className="flex space-x-6">
             <a href="mailto:give@phik.app" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d6ad60] hover:text-[#2a0906] transition-colors"><Mail size={20} /></a>
             <a href="https://instagram.com/Purdue_PKT" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d6ad60] hover:text-[#2a0906] transition-colors"><InstagramIcon size={20} /></a>
             <a href="https://facebook.com/purduepkt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d6ad60] hover:text-[#2a0906] transition-colors"><FacebookIcon size={20} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white font-medium">
        <p>Copyright &copy; {new Date().getFullYear()} Phi Kappa Theta Fraternity, Indiana Zeta. All rights reserved.</p>
        <p className="mt-2 text-white/60 text-xs">This site is for alumni engagement and philanthropic support during Purdue Day of Giving.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#d6ad60] selection:text-[#2a0906]">
      <Header />
      <main>
        <Hero />
        <ImpactSection />
        <PrioritiesSection />
        <GivingGoals />
        <DonateSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}