import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Contact Header */}
            <div className="relative h-[300px] bg-black">
                <img 
                    src="/public/images/shopy4.webp"
                    alt="Contact Banner" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">CONTACT</h1>
                </div>
            </div>

            {/* Contact Content */}
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold mb-8">Send Us A Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How Can We Help?"
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-xl text-red-500">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            8th floor, 379 Hudson St, New York, NY 10018
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-xl text-red-500">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Lets Talk</h3>
                                        <p className="text-gray-600">+1 96 716 6879</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-xl text-red-500">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Sale Support</h3>
                                        <p className="text-gray-600">contact@fashe.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0607733213086!2d-74.00731674940027!3d40.74144644371558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bd6c0b9789%3A0x5dd8af15d445544f!2s379%20Hudson%20St%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2s!4v1644346128834!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Store Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 