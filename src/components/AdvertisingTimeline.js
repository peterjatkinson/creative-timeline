import React, { useState } from 'react';
import { Brain, Layers, Wifi, Radio, Smartphone, Cpu, ChevronLeft, ChevronRight, X } from 'lucide-react';
//Images
import img1960s from '../images/1960sad.webp';


const timelineData = [
  {
    decade: '1960s',
    title: 'The Birth of the Creative Revolution',
    description: 'The rise of creative-driven advertising, focusing on wit and storytelling.',
    keyEvent: 'Madison Avenue agencies changed the landscape by prioritizing creativity over hard-selling tactics.',
    iconicAd: 'Volkswagen\'s "Think Small" (1960)',
    impact: 'This minimalist ad revolutionized car advertising by emphasizing simplicity and irony.',
    icon: Brain,
    image: img1960s
  },
  {
    decade: '1970s',
    title: 'The Power of Branding',
    description: 'A shift from selling products to building brand identities.',
    keyEvent: 'Brands began focusing on emotional connections and lifestyle imagery.',
    iconicAd: 'Coca-Cola\'s "I\'d Like to Buy the World a Coke" (1971)',
    impact: 'This ad showcased a message of unity and peace, associating Coca-Cola with positive, uplifting emotions.',
    icon: Layers,
  },
  {
    decade: '1980s',
    title: 'Big Budget, Big Ideas, and the Rise of TV Commercials',
    description: 'Television became the dominant medium for advertising.',
    keyEvent: 'Increased ad budgets led to more dramatic, story-driven TV commercials.',
    iconicAd: 'Apple\'s "1984" Super Bowl Ad (1984)',
    impact: 'Introduced the Macintosh computer and portrayed Apple as a rebel challenging the status quo.',
    icon: Wifi,
  },
  {
    decade: '1990s',
    title: 'Digital Beginnings and Shock Advertising',
    description: 'The rise of early digital ads and controversial "shock" advertising.',
    keyEvent: 'The beginning of digital advertising with the rise of the internet.',
    iconicAd: 'Benetton\'s "Unhate" Campaign',
    impact: 'Benetton became known for its shocking ads that dealt with social issues, aiming to provoke conversations.',
    icon: Radio,
  },
  {
    decade: '2000s',
    title: 'The Rise of Digital and Guerrilla Marketing',
    description: 'The explosion of digital marketing and guerrilla tactics.',
    keyEvent: 'Brands increasingly invested in online campaigns, viral marketing, and guerrilla strategies.',
    iconicAd: 'Burger King\'s "Subservient Chicken" (2004)',
    impact: 'This online campaign allowed users to "control" a chicken via a website, pioneering interactive and viral marketing.',
    icon: Smartphone,
  },
  {
    decade: '2010s',
    title: 'Social Media, Influencers, and the Age of Authenticity',
    description: 'The dominance of social media and the rise of influencer marketing.',
    keyEvent: 'Brands started shifting budgets to social media platforms, using influencers to authentically connect with consumers.',
    iconicAd: 'Always\' "Like a Girl" Campaign (2014)',
    impact: 'This ad challenged gender stereotypes and empowered women, sparking a cultural conversation.',
    icon: Wifi,
  },
  {
    decade: '2020s',
    title: 'Personalization, AI, and the Power of Data',
    description: 'The rise of AI-driven, data-fueled personalized marketing.',
    keyEvent: 'Brands increasingly used data and AI to create hyper-targeted, personalized ads.',
    iconicAd: 'Spotify\'s "Wrapped" Campaign',
    impact: 'Spotify\'s yearly "Wrapped" campaign gave users a personalized summary of their listening habits, transforming private data into a viral phenomenon.',
    icon: Cpu,
  },
];

const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
    if (!isOpen) return null;
  
    const handleOverlayClick = (e) => {
      // Check if the click is on the overlay (not on the image or the close button)
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
        onClick={handleOverlayClick}
      >
        <div className="relative max-w-4xl max-h-screen p-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
          >
            <X size={24} />
          </button>
          <img src={imageSrc} alt={alt} className="max-w-full max-h-[90vh] object-contain" />
        </div>
      </div>
    );
  };
    
  const AdvertisingTimeline = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex < timelineData.length - 1 ? prevIndex + 1 : prevIndex));
    };
  
    const currentEra = timelineData[currentIndex];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Evolution of Advertising</h1>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {timelineData.map((era, index) => (
            <button
                key={era.decade}
                className={`w-24 h-24 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${
                index === currentIndex ? 'ring-4 ring-blue-500' : 'hover:bg-blue-200 hover:text-white hover:scale-105'
                }`}
                onClick={() => setCurrentIndex(index)}
            >
                <era.icon className={`w-8 h-8 ${index === currentIndex ? 'text-blue-500' : 'text-gray-700'}`} />
                <span className="mt-2 text-sm font-semibold text-gray-800">{era.decade}</span>
            </button>
        ))}
        </div>
        <div className="relative p-1 rounded-lg bg-blue-300">
  <div className="p-6 bg-white rounded-lg shadow-xl max-w-4xl w-full border-4 border-dashed border-transparent bg-clip-padding">
    <div className="flex justify-between items-center mb-6">
        <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full transition-colors duration-300 ${
                currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
            } disabled:opacity-50`}
            >
            <ChevronLeft className="w-6 h-6" />
        </button>

      <h2 className="text-3xl font-bold text-center text-gray-800">{currentEra.decade}</h2>
      <button
        onClick={handleNext}
        disabled={currentIndex === timelineData.length - 1}
        className={`p-2 rounded-full transition-colors duration-300 ${
            currentIndex === timelineData.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
        } disabled:opacity-50`}
        >
        <ChevronRight className="w-6 h-6" />
    </button>
    </div>

  {/* Wrap content and image in a flex container for side-by-side layout */}
  <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
    {/* Left-hand column for text content */}
    <div className="flex-1">
      <h3 className="text-2xl font-semibold text-gray-700">{currentEra.title}</h3>
      <p className="text-gray-600">{currentEra.description}</p>
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Key Event:</h4>
        <p className="text-gray-600">{currentEra.keyEvent}</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Iconic Ad:</h4>
        <p className="text-gray-600">{currentEra.iconicAd}</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Impact:</h4>
        <p className="text-gray-600">{currentEra.impact}</p>
      </div>
    </div>

    {/* Right-hand column for the image */}
    <div
      className="flex justify-center items-center bg-gray-100 p-4 rounded-lg cursor-pointer flex-shrink-0" 
      style={{ width: '300px' }}  // Adjust width as needed
      onClick={() => setIsModalOpen(true)}
    >
      <img
        src={currentEra.image}
        alt={`Advertising in the ${currentEra.decade}`}
        className="max-w-full max-h-[280px] object-contain"
      />
    </div>
  </div>
</div>
</div>

  
        {/* Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={currentEra.image}
          alt={`Full size advertising in the ${currentEra.decade}`}
        />
      </div>
    );
  };
  
  export default AdvertisingTimeline;
  