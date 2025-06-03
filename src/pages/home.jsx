import React, { useState, useEffect } from 'react';
import useCountdown from '../hooks/useCountdown';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showText, setShowText] = useState(false);

    // Set target date to 7 days from now
    const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const timeLeft = useCountdown(targetDate);

    const slides = [
        {
            image: '/images/carousel1.jpg',
            smallText: 'Women Collection 2024',
            largeText: 'NEW ARRIVALS',
            buttonText: 'SHOP NOW'
        },
        {
            image: '/images/carousel2.jpg',
            smallText: 'Men New-Season',
            largeText: 'JACKETS & COATS',
            buttonText: 'DISCOVER NOW'
        },
        {
            image: '/images/carousel3.webp',
            smallText: 'Spring 2024',
            largeText: 'NEW TRENDS',
            buttonText: 'SHOP NOW'
        }
    ];

    useEffect(() => {
        setShowText(false);
        const textTimer = setTimeout(() => setShowText(true), 500);

        const slideTimer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(slideTimer);
        };
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const categories = [
        {
            name: "DRESSES",
            image: "/public/images/banner-02.jpg",
            alt: "Floral white dress"
        },
        {
            name: "WATCHES",
            image: "/public/images/banner-07.jpg",
            alt: "Black elegant watch"
        },
        {
            name: "BAGS",
            image: "/public/images/cards2.webp",
            alt: "Grey modern backpack"
        },
        {
            name: "SUNGLASSES",
            image: "/public/images/cards3.webp",
            alt: "Black aviator sunglasses"
        },
        {
            name: "FOOTERWEAR",
            image: "/public/images/category-bag.jpg",
            alt: "Classic black Converse"
        },
        {
            name: "ACCESSORIES",
            image: "/public/images/image.png",
            alt: "Black leather wallet"
        }
    ];

    return (
        <main>
            {/* Carousel Section */}
            <div className="relative h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        {/* Image */}
                        <img 
                            src={slide.image}
                            alt={slide.smallText}
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>
                        
                        {/* Text Content */}
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div className={`transform transition-all duration-500 ${
                                showText && currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                                <h3 className="text-xl md:text-2xl text-white mb-4">
                                    {slide.smallText}
                                </h3>
                                <h2 className="text-4xl md:text-7xl font-bold text-white mb-8">
                                    {slide.largeText}
                                </h2>
                                <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"id=''>
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
                >
                    ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${
                                currentSlide === index ? 'bg-white' : 'bg-transparent'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="group relative overflow-hidden cursor-pointer">
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    <img 
                                        src={category.image} 
                                        alt={category.alt} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-white text-2xl font-semibold tracking-wider">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lookbook Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column - Lookbook Image */}
                        <div className="relative group overflow-hidden">
                            <img 
                                src="/images/gallery-13.jpg" 
                                alt="The Beauty Lookbook" 
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
                                <h3 className="text-2xl mb-2">The Beauty</h3>
                                <h2 className="text-5xl font-bold mb-6">LOOK BOOK</h2>
                                <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors">
                                    VIEW COLLECTION
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Product with Timer */}
                        <div className="bg-white p-8 flex flex-col items-center justify-center">
                            <div className="w-full max-w-[300px] mb-8">
                                <img 
                                    src="/images/cards4.webp" 
                                    alt="Boxy2 T-Shirt" 
                                    className="w-full h-auto"
                                />
                            </div>
                            <h3 className="text-xl mb-2 text-center">Boxy2 T-Shirt with Roll Sleeve</h3>
                            <p className="text-xl font-semibold mb-8 text-center">$20.00</p>
                            
                            {/* Countdown Timer */}
                            <div className="grid grid-cols-4 gap-4 w-full max-w-md">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-800">{timeLeft.days}</div>
                                    <div className="text-sm text-gray-600">days</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-800">{timeLeft.hours}</div>
                                    <div className="text-sm text-gray-600">hrs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-800">{timeLeft.minutes}</div>
                                    <div className="text-sm text-gray-600">mins</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-800">{timeLeft.seconds}</div>
                                    <div className="text-sm text-gray-600">secs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Blog Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            OUR BLOG
                        </h2>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Blog Post 1 */}
                        <div className="group">
                            <div className="overflow-hidden mb-5">
                                <img 
                                    src="/images/gallery-03.jpg" 
                                    alt="Black Friday Guide" 
                                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                                Black Friday Guide: Best Sales & Discount Codes
                            </h3>
                            <div className="text-gray-500 text-sm mb-3">
                                by <span className="text-gray-700">fashe-theme Admin</span> on Dec 28,2017
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                            </p>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="group">
                            <div className="overflow-hidden mb-5">
                                <img 
                                    src="/images/gallery-07.jpg" 
                                    alt="White Sneakers" 
                                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                                The White Sneakers Nearly Every Fashion Girls Own
                            </h3>
                            <div className="text-gray-500 text-sm mb-3">
                                by <span className="text-gray-700">fashe-theme Admin</span> on Dec 28,2017
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...
                            </p>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="group">
                            <div className="overflow-hidden mb-5">
                                <img 
                                    src="/images/gallery-09.jpg" 
                                    alt="New York SS 2018" 
                                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                                New York SS 2018 Street Style: By Annina Mislin
                            </h3>
                            <div className="text-gray-500 text-sm mb-3">
                                by <span className="text-gray-700">fashe-theme Admin</span> on Dec 28,2017
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram and Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Instagram Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-wider">
                            @ FOLLOW US ON INSTAGRAM
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Free Delivery Feature */}
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                Free Delivery Worldwide
                            </h3>
                            <p className="text-gray-600 italic">
                                Mirum est notare quam littera gothica
                            </p>
                        </div>

                        {/* 30 Days Return Feature */}
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                30 Days Return
                            </h3>
                            <p className="text-gray-600 italic">
                                Simply return it within 30 days for an exchange.
                            </p>
                        </div>

                        {/* Store Opening Feature */}
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                Store Opening
                            </h3>
                            <p className="text-gray-600 italic">
                                Shop open from Monday to Sunday
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home; 