import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showText, setShowText] = useState(false);

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

           