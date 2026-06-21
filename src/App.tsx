import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import AIChatbot from './components/AIChatbot';
import CustomCursor from './components/CustomCursor';
import NotificationToast from './components/NotificationToast';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Services from './sections/Services';
import Marquee from './components/Marquee';
import WhyChoose from './sections/WhyChoose';
import Timeline from './sections/Timeline';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Newsletter from './sections/Newsletter';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary selection:bg-accent-blue/30 overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />
      <AIChatbot />
      <NotificationToast />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Services />
        <WhyChoose />
        <Timeline />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
