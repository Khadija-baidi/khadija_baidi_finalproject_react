import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCountdown from '../hooks/useCountdown';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showText, setShowText] = useState(false);
    const [productIndex, setProductIndex] = useState(0);

    const targetDate = new Date('2024-12-31T23:59:59').getTime();
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

    const products = [
        {
            id: 1,
            name: "Boxy7 T-Shirt with Roll Sleeve",
            price: 20.00,
            image: "/images/item-02.jpg"
        },
        {
            id: 2,
            name: "Boxy6 T-Shirt with Roll Sleeve",
            price: 20.00,
            image: "/images/item-03.jpg"
        },
        {
            id: 3,
            name: "Boxy5 T-Shirt with Roll Sleeve",
            price: 20.00,
            image: "/images/item-05.jpg"
        },
        {
            id: 4,
            name: "Boxy4 T-Shirt with Roll Sleeve",
            price: 20.00,
            image: "/images/item-07.jpg"
        },
        {
            id: 5,
            name: "Classic White T-Shirt",
            price: 20.00,
            image: "/images/item-02.jpg"
        },
        {
            id: 6,
            name: "Summer Collection Tee",
            price: 20.00,
            image: "/images/item-03.jpg"
        },
        {
            id: 7,
            name: "Casual Comfort T-Shirt",
            price: 20.00,
            image: "/images/item-05.jpg"
        },
        {
            id: 8,
            name: "Essential Basic Tee",
            price: 20.00,
            image: "/images/item-07.jpg"
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

    const nextProducts = () => {
        setProductIndex((prev) => (prev + 4 >= products.length) ? 0 : prev + 4);
    };

    const prevProducts = () => {
        setProductIndex((prev) => (prev - 4 < 0) ? Math.max(0, products.length - 4) : prev - 4);
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
            <div className="relative h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <img 
                            src={slide.image}
                            alt={slide.smallText}
                            className="w-full h-full object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-black/30"></div>
                        
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
                                <Link 
                                    to="/shop"
                                    className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

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

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        FEATURED PRODUCTS
                    </h2>

                    <div className="relative">
                        <button
                            onClick={prevProducts}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 text-2xl"
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextProducts}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 text-2xl"
                        >
                            ›
                        </button>

                        <div className="px-12">
                            <div className="grid grid-cols-4 gap-8">
                                {products.slice(productIndex, productIndex + 4).map((product) => (
                                    <div 
                                        key={product.id}
                                        className="group relative w-full transition-all duration-500 ease-in-out"
                                    >
                                        <div className="relative overflow-hidden mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                                <button 
                                                    onClick={() => alert('Added to cart: ' + product.name)}
                                                    className="bg-white text-gray-900 px-6 py-2 rounded-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100"
                                                >
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                        <div className="opacity-100 transition-opacity duration-500">
                                            <h3 className="text-center text-gray-800 mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-center text-gray-600">
                                                ${product.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                        <div className="bg-white p-8 flex flex-col items-center justify-center">
                            <div className="w-full max-w-[300px] mb-8">
                                <img 
                                    src="/images/cards4.webp" 
                                    alt="Boxy2 T-Shirt" 
                                    className="w-full h-auto"
                                />
                            </div>
                            <h3 className="text-xl mb-2 text-center">Boxy2 T-Shirt with Roll Sleeve</h3>
                            <p className="text-xl font-semibold mb-4 text-center">
                                <span className="text-red-500">$15.00</span>
                                <span className="text-gray-400 line-through ml-2">$20.00</span>
                            </p>
                            <p className="text-sm text-gray-600 mb-8">Limited Time Offer - Ends Soon!</p>
                            
                            {/* Countdown Timer */}
                            <div className="grid grid-cols-4 gap-4 w-full max-w-md">
                                <div className="text-center bg-gray-100 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-red-500">{timeLeft.days}</div>
                                    <div className="text-sm text-gray-600 uppercase">days</div>
                                </div>
                                <div className="text-center bg-gray-100 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-red-500">{timeLeft.hours}</div>
                                    <div className="text-sm text-gray-600 uppercase">hrs</div>
                                </div>
                                <div className="text-center bg-gray-100 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-red-500">{timeLeft.minutes}</div>
                                    <div className="text-sm text-gray-600 uppercase">mins</div>
                                </div>
                                <div className="text-center bg-gray-100 p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-red-500">{timeLeft.seconds}</div>
                                    <div className="text-sm text-gray-600 uppercase">secs</div>
                                </div>
                            </div>
                            <button 
                                className="mt-8 bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                                onClick={() => alert('Added to cart!')}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            OUR BLOG
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-wider">
                            @ FOLLOW US ON INSTAGRAM
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                Free Delivery Worldwide
                            </h3>
                            <p className="text-gray-600 italic">
                                Mirum est notare quam littera gothica
                            </p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                30 Days Return
                            </h3>
                            <p className="text-gray-600 italic">
                                Simply return it within 30 days for an exchange.
                            </p>
                        </div>

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