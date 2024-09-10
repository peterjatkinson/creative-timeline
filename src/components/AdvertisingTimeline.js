import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faNetworkWired, faGlobe, faTv, faTag, faCamera, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';


//Images
import img1960s from '../images/1960sad.webp';
import img1990s from '../images/1990sad.avif';
import img2000s from '../images/2000sad.jpg';
import img2010s from '../images/2010sad.png';


const timelineData = [
    {
        decade: '1960s',
        title: 'The birth of the creative revolution',
        description: 'The rise of creative-driven advertising, focusing on wit and storytelling. Madison Avenue agencies changed the landscape by prioritising creativity over hard-selling tactics.',
        exampleAd: 'Volkswagen\'s \'Think Small\' (1960)',
        impact: 'This minimalist ad revolutionised car advertising by emphasising simplicity and irony.',
        icon: () => <FontAwesomeIcon icon={faPenNib} />,
        image: img1960s
    },
    {
        decade: '1970s',
        title: 'The power of branding',
        description: 'A shift from selling products to building brand identities. Brands began focusing on emotional connections and lifestyle imagery.',
        exampleAd: 'Coca-Cola\'s \'I\'d Like to Buy the World a Coke\' (1971)',
        impact: 'This ad showcased a message of unity and peace, associating Coca-Cola with positive, uplifting emotions.',
        icon: () => <FontAwesomeIcon icon={faTag} />,
        youtubeVideo: 'https://www.youtube.com/embed/ib-Qiyklq-Q'  // YouTube video link
    },
    {
        decade: '1980s',
        title: 'Big budget, big ideas and the rise of tv commercials',
        description: 'Television became the dominant medium for advertising. Increased ad budgets led to more dramatic, story-driven TV commercials.',
        exampleAd: 'Apple\'s \'1984\' Super Bowl Ad (1984)',
        impact: 'Introduced the Macintosh computer and portrayed Apple as a rebel challenging the status quo.',
        icon: () => <FontAwesomeIcon icon={faTv} />,
        youtubeVideo: 'https://www.youtube.com/embed/VtvjbmoDx-I'  // Apple 1984 ad
    },
    {
        decade: '1990s',
        title: 'Digital beginnings in advertising',
        description: 'The rise of early digital ads with the emergence of the internet. The first digital banner ad launched by AT&T in 1994 on HotWired.',
        exampleAd: 'AT&T’s first banner ad (1994)',
        impact: 'This banner ad marked the birth of online advertising, creating a foundation for future digital marketing.',
        icon: () => <FontAwesomeIcon icon={faGlobe} />,
        image: img1990s
    },
    {
        decade: '2000s',
        title: 'The rise of digital and guerrilla marketing',
        description: 'The explosion of digital marketing and guerrilla tactics. Brands increasingly invested in online campaigns, viral marketing and guerrilla strategies.',
        exampleAd: 'Burger King\'s \'Subservient Chicken\' (2004)',
        impact: 'This online campaign allowed users to \'control\' a chicken via a website, pioneering interactive and viral marketing.',
        icon: () => <FontAwesomeIcon icon={faNetworkWired} />,
        image: img2000s
    },
    {
        decade: '2010s',
        title: 'The rise of influencer marketing',
        description: 'The dominance of social media and influencers as brands shifted their marketing budgets to platforms like Instagram.',
        exampleAd: 'Daniel Wellington Instagram Influencer Campaign',
        impact: 'Daniel Wellington became a major watch brand by giving influencers free watches in exchange for social media posts, setting a standard for influencer-driven marketing.',
        icon: () => <FontAwesomeIcon icon={faCamera} />,
        image: img2010s
        },
    {
        decade: '2020s',
        title: 'Personalisation, AI and the power of data',
        description: 'The rise of AI-driven, data-fueled personalized marketing.',
        exampleAd: 'Coca-Cola \'Create Real Magic\' AI-powered campaign (2023)',
        impact: 'Coca-Cola’s use of AI in this campaign has redefined how brands interact with consumers, encouraging them to create personalized digital art with Coca-Cola’s assets using advanced AI tools.',
        icon: () => <FontAwesomeIcon icon={faRobot} />,
        youtubeVideo: 'https://www.youtube.com/embed/YDGknvJ55Ag'  // Coca-Cola Real Magic AI Campaign video (embed link)
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

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: false, // This disables mouse tracking
        trackTouch: true   // This ensures touch is still tracked
    });

    const currentEra = timelineData[currentIndex];

    return (
        <div {...handlers} className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex flex-col items-center justify-start p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-12">Evolution of Advertising</h1>
            <div className="hidden md:flex md:flex-wrap md:justify-center gap-6 mb-8">
                {timelineData.map((era, index) => (
                    <button
                        key={era.decade}
                        className={`w-24 h-24 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${index === currentIndex ? 'ring-4 ring-blue-500' : 'hover:bg-blue-200 hover:text-white hover:scale-105'
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
                            className={`p-2 rounded-full transition-colors duration-300 ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
                                } disabled:opacity-50`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <h2 className="text-3xl font-bold text-center text-gray-800">{currentEra.decade}</h2>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === timelineData.length - 1}
                            className={`p-2 rounded-full transition-colors duration-300 ${currentIndex === timelineData.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
                                } disabled:opacity-50`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Wrap content and image in a flex container for side-by-side layout */}
                    <div className="flex flex-col md:flex-row md:space-x-6 w-full max-w-4xl mx-auto">
                    {/* Left-hand column for text content */}
                        <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0">
                            <h3 className="text-2xl font-semibold text-gray-700">{currentEra.title}</h3>
                            <p className="text-gray-600">{currentEra.description}</p>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-700 mb-2">Example ad:</h4>
                                <p className="text-gray-600">{currentEra.exampleAd}</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-700 mb-2">Impact:</h4>
                                <p className="text-gray-600">{currentEra.impact}</p>
                            </div>
                        </div>



                        {/* Right-hand column for the image or video */}
                        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center items-center bg-gray-100 p-4 rounded-lg">
                        {currentEra.youtubeVideo ? (
                            <div className="video-container w-full">
                                <div className="relative pb-[56.25%] h-0">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={currentEra.youtubeVideo}
                                        title={`Example ad for the ${currentEra.decade}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="cursor-pointer w-full h-full flex justify-center items-center"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <img
                                    src={currentEra.image}
                                    alt={`Advertising in the ${currentEra.decade}`}
                                    className="max-w-full max-h-[280px] md:max-h-[340px] lg:max-h-[280px] object-contain"
                                />
                            </div>
                        )}
                        </div>

                        {currentEra.image && (
                            <ImageModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                imageSrc={currentEra.image}
                                alt={`Full size advertising in the ${currentEra.decade}`}
                            />
                        )}

                    </div>
                </div>
            </div>



        </div>
    );
};

export default AdvertisingTimeline;
