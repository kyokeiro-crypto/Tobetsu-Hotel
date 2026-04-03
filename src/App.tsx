import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  MapPin, 
  Building, 
  TrendingUp, 
  Wrench, 
  Users, 
  Lightbulb, 
  Phone,
  Info,
  Star,
  CheckCircle2,
  Globe,
  Download
} from 'lucide-react';
import { translations, Language } from './translations';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('ja');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      const element = document.getElementById('pdf-content');
      if (!element) return;
      
      // Temporarily hide elements that shouldn't be in the PDF
      const noPrintElements = document.querySelectorAll('.no-print');
      noPrintElements.forEach(el => (el as HTMLElement).style.display = 'none');

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 1200, // Force desktop layout
      });
      
      // Restore hidden elements
      noPrintElements.forEach(el => (el as HTMLElement).style.display = '');

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save(`Tobetsu-Hotel-Presentation-${lang}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDFの生成中にエラーが発生しました。 / Error generating PDF.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div id="pdf-content" className="min-h-screen bg-ryokan-light selection:bg-ryokan-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 no-print ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`font-serif text-xl font-bold tracking-widest ${scrolled ? 'text-ryokan-green' : 'text-white drop-shadow-md'}`}>
            {t.hero.title}
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#overview" className={`hover:text-ryokan-gold transition-colors ${scrolled ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>{t.nav.overview}</a>
            <a href="#revenue" className={`hover:text-ryokan-gold transition-colors ${scrolled ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>{t.nav.revenue}</a>
            <a href="#prospects" className={`hover:text-ryokan-gold transition-colors ${scrolled ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>{t.nav.prospects}</a>
            <a href="#gallery" className={`hover:text-ryokan-gold transition-colors ${scrolled ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>{t.nav.gallery}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 text-xs font-medium ${scrolled ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>
              <Globe className="w-4 h-4" />
              <button onClick={() => setLang('ja')} className={`hover:text-ryokan-gold transition-colors ${lang === 'ja' ? 'text-ryokan-gold font-bold' : ''}`}>JP</button>
              <span>|</span>
              <button onClick={() => setLang('zh')} className={`hover:text-ryokan-gold transition-colors ${lang === 'zh' ? 'text-ryokan-gold font-bold' : ''}`}>CN</button>
              <span>|</span>
              <button onClick={() => setLang('en')} className={`hover:text-ryokan-gold transition-colors ${lang === 'en' ? 'text-ryokan-gold font-bold' : ''}`}>EN</button>
            </div>
            <button 
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className={`hidden sm:flex items-center gap-2 bg-ryokan-gold hover:bg-ryokan-gold/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isGeneratingPdf ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Download className="w-4 h-4" />
              )}
              {lang === 'zh' ? '下载 PDF' : lang === 'en' ? 'Download PDF' : 'PDFをダウンロード'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/ryokan-exterior/1920/1080?blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-ryokan-light"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-serif drop-shadow-md"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-panel rounded-2xl p-8 max-w-2xl mx-auto text-left flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-gray-800 text-sm font-bold mb-1">{t.hero.priceLabel}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-serif font-bold text-ryokan-green">{t.hero.price}</span>
                <span className="text-xl font-bold text-ryokan-green">{t.hero.currency}</span>
              </div>
            </div>
            <div className="h-px w-full md:h-16 md:w-px bg-gray-300"></div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ryokan-gold" />
                <span>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-ryokan-gold" />
                <span>{t.hero.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-ryokan-gold" />
                <span>{t.hero.hotspring}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-ryokan-green mb-4">{t.highlights.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.highlights.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {t.highlights.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                <div className="bg-ryokan-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {i === 0 ? <Building className="w-8 h-8 text-ryokan-gold" /> : 
                   i === 1 ? <Star className="w-8 h-8 text-ryokan-gold" /> : 
                   <TrendingUp className="w-8 h-8 text-ryokan-gold" />}
                </div>
                <h3 className="text-xl font-serif font-bold text-ryokan-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Property Overview */}
      <section id="overview" className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-ryokan-gold"></div>
              <h2 className="text-3xl font-serif font-bold text-ryokan-green">{t.overview.title}</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-4">
                <MapPin className="w-5 h-5 text-ryokan-gold" />
                {t.overview.landTitle}
              </h3>
              <div className="space-y-4 text-sm">
                {t.overview.land.map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-medium text-right">{item.value}<br/><span className="text-xs text-gray-400">{item.sub}</span></span>
                  </div>
                ))}
                <div className="flex justify-between bg-ryokan-light p-4 rounded-lg mt-4">
                  <span className="font-bold text-ryokan-green">{t.overview.totalLand.label}</span>
                  <span className="font-bold text-ryokan-green">{t.overview.totalLand.value}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-4">
                <Building className="w-5 h-5 text-ryokan-gold" />
                {t.overview.buildingTitle}
              </h3>
              <div className="space-y-4 text-sm">
                {t.overview.building.map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="font-medium text-right whitespace-pre-line">{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Renovation History */}
      <section className="py-24 px-6 bg-ryokan-light">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-ryokan-green mb-4">{t.history.title}</h2>
              <p className="text-gray-600">{t.history.subtitle}</p>
            </div>
          </FadeIn>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {t.history.items.map((history, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-ryokan-light bg-ryokan-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="font-bold text-ryokan-green text-lg mb-3">{history.year}</div>
                    <ul className="space-y-2">
                      {history.events.map((item, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-ryokan-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue & Staffing */}
      <section id="revenue" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Revenue */}
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-ryokan-gold" />
                <h2 className="text-3xl font-serif font-bold text-ryokan-green">{t.revenue.title}</h2>
              </div>
              <p className="text-gray-600 mb-8">{t.revenue.subtitle}</p>
              
              <div className="bg-ryokan-light rounded-2xl p-8 mb-8">
                <h4 className="font-bold text-ryokan-dark mb-4 border-b border-gray-200 pb-2">{t.revenue.basicTitle}</h4>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  {t.revenue.basicItems.map((item, i) => (
                    <li key={i} className="flex justify-between"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
                  ))}
                </ul>

                <h4 className="font-bold text-ryokan-dark mb-4 border-b border-gray-200 pb-2">{t.revenue.calcTitle}</h4>
                <div className="space-y-4 text-sm">
                  {t.revenue.calcSteps.map((step, i) => (
                    <div key={i} className={i === 2 ? "bg-ryokan-green text-white p-5 rounded-lg shadow-md" : "bg-white p-4 rounded-lg shadow-sm"}>
                      <p className={i === 2 ? "text-white/80 text-xs mb-1" : "text-gray-500 text-xs mb-1"}>{step.label}</p>
                      <p className={i === 2 ? "font-mono text-xl font-bold" : "font-mono text-gray-800"}>{step.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                {t.revenue.rooms.map((room, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                    <div className="text-xs text-gray-500 mb-1">{room.type}</div>
                    <div className="font-bold text-ryokan-dark">{room.count}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Staffing */}
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-ryokan-gold" />
                <h2 className="text-3xl font-serif font-bold text-ryokan-green">{t.staffing.title}</h2>
              </div>
              <p className="text-gray-600 mb-8">{t.staffing.subtitle}</p>

              <div className="space-y-4 mb-8">
                {t.staffing.items.map((staff, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-ryokan-gold/30 transition-colors">
                    <div className="bg-ryokan-light text-ryokan-green font-bold w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-sm">
                      {staff.count}
                    </div>
                    <div>
                      <h4 className="font-bold text-ryokan-dark">{staff.role}</h4>
                      {staff.desc && <p className="text-sm text-gray-500 mt-1">{staff.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  {t.staffing.efficiencyTitle}
                </h4>
                <ul className="space-y-2 text-sm text-amber-800">
                  {t.staffing.efficiencyItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Issues & Prospects */}
      <section id="prospects" className="py-24 px-6 bg-ryokan-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Issues */}
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold text-ryokan-gold mb-8">{t.issues.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                    <Building className="w-5 h-5 text-gray-400" />
                    {t.issues.ryokanTitle}
                  </h3>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {t.issues.ryokanItems.map((item, i) => (
                      <li key={i} className="flex gap-3"><span className="text-ryokan-gold">▪</span> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-ryokan-accent/30">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-ryokan-accent">
                    <Info className="w-5 h-5" />
                    {t.issues.dormTitle}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {t.issues.dormDesc}
                  </p>
                  <ul className="space-y-3 text-gray-300 text-sm mb-4">
                    {t.issues.dormItems.map((item, i) => (
                      <li key={i} className="flex gap-3"><span className="text-ryokan-accent">▪</span> {item}</li>
                    ))}
                  </ul>
                  <div className="bg-ryokan-accent/20 text-ryokan-accent-light p-3 rounded text-xs font-medium border border-ryokan-accent/30">
                    {t.issues.dormNote}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Prospects */}
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-serif font-bold text-ryokan-gold mb-8">{t.prospects.title}</h2>
              
              <div className="space-y-6">
                {t.prospects.items.map((item, i) => (
                  <div key={i} className="group flex gap-6 p-6 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="w-12 h-12 rounded-full bg-ryokan-gold/20 flex items-center justify-center shrink-0 group-hover:bg-ryokan-gold group-hover:text-ryokan-dark transition-colors">
                      <TrendingUp className="w-5 h-5 text-ryokan-gold group-hover:text-ryokan-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-ryokan-light">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-ryokan-green mb-4">{t.gallery.title}</h2>
              <p className="text-gray-600">{t.gallery.subtitle}</p>
            </div>
          </FadeIn>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-ryokan-dark mb-6 border-l-4 border-ryokan-gold pl-4">{t.gallery.tabRyokan}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: "/images/ryokan-1.png", alt: "Ryokan Bath" },
                { src: "/images/ryokan-2.png", alt: "Ryokan Room" },
                { src: "/images/ryokan-3.png", alt: "Ryokan Exterior" },
                { src: "/images/ryokan-4.png", alt: "Ryokan Lobby" },
                { src: "/images/ryokan-5.png", alt: "Ryokan Dining" },
                { src: "/images/ryokan-6.png", alt: "Ryokan Lounge" }
              ].map((img, i) => (
                <FadeIn key={`ryokan-${i}`} delay={i * 0.1}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden group relative cursor-pointer">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/ryokan-${i}/600/600`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-ryokan-dark mb-6 border-l-4 border-ryokan-gold pl-4">{t.gallery.tabDorm}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/dorm-1.jpg", alt: "Dormitory Exterior" },
                { src: "/images/dorm-2.jpg", alt: "Dormitory Room" },
                { src: "/images/dorm-3.jpg", alt: "Dormitory Hall" },
                { src: "/images/dorm-4.jpg", alt: "Dormitory Kitchen" },
                { src: "/images/dorm-5.jpg", alt: "Dormitory Bath" },
                { src: "/images/dorm-6.jpg", alt: "Dormitory Dining" }
              ].map((img, i) => (
                <FadeIn key={`dorm-${i}`} delay={i * 0.1}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden group relative cursor-pointer">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/dorm-${i}/800/600`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-ryokan-green text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] bg-repeat opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">{t.contact.title}</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
            <div className="text-2xl md:text-4xl font-bold font-serif mb-8 tracking-wider">
              {t.contact.company}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
              <a href="tel:011-600-6863" className="flex items-center gap-3 hover:text-ryokan-gold transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold text-2xl tracking-wider">011-600-6863</span>
              </a>
            </div>
            
            <div className="mt-10 grid md:grid-cols-2 gap-6 text-sm text-left text-gray-300 border-t border-white/10 pt-8">
              <div>
                <p className="mb-2">{t.contact.address1}</p>
                <p>{t.contact.address2}</p>
              </div>
              <div>
                <p className="mb-2">{t.contact.license}</p>
                <p className="mb-2">{t.contact.hours}</p>
                <p>{t.contact.type}</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t.contact.company} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
