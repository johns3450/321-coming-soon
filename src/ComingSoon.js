import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ComingSoon() {
    const [email, setEmail] = useState('');
    const [captchaVisible, setCaptchaVisible] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleInputChange = (e) => setEmail(e.target.value);

    const handleCaptchaChange = (value) => {
        if (value) {
            setCaptchaVerified(true);
        }
    };    

const handleSubmit = async (e) => {
    e.preventDefault();

    // If CAPTCHA is already verified, proceed with form submission
    if (captchaVerified) {
        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbyeK4pli6yIlsgdY0z9qHBeUB2mUY1I9TFm9nqmMbdo-5O7B7tDilqDTay2UA_DA5tyMg/exec?email=${encodeURIComponent(email)}`, {
                method: 'GET'
            });

            // Check if the response is OK
            if (response.ok) {
                alert('You’re on the list! 🎉');
                setEmail('');
                setCaptchaVisible(false);
                setCaptchaVerified(false);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an issue with the signup.');
        }
    } else {
        // If CAPTCHA is not verified, show the CAPTCHA
        setCaptchaVisible(true);
    }
};

    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 md:p-8 lg:p-12 overflow-hidden relative">
            
            {/* Centered Content Container with More Spacing */}
            <div className="flex flex-col items-center justify-center text-center space-y-10">

                {/* Fading In and Slightly Smaller Logo */}
                <motion.img 
                    src="/logo.png" 
                    alt="321 WIN" 
                    className="w-48 sm:w-60 md:w-50 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"  
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Fun Animated Heading with 3D Effect and Outline */}
                <motion.h1 
                    className="text-5xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg title-3d-outline px-4 sm:px-6 box-border"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.4 }}
                    transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                    whileHover={{ scale: 1.5 }}
                >
                    Game On, Hero?
                </motion.h1>

                {/* Email Signup */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-4">Don’t Miss Out on the Masti!</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleInputChange}
                            className="p-2 sm:p-3 mb-4 w-full rounded-lg border-2 border-yellow-500 focus:outline-none focus:border-yellow-600 text-black placeholder-gray-500"
                            required
                        />

                        {/* Google reCAPTCHA - Only visible after submit button is clicked */}
                        {captchaVisible && (
                            <div className="mb-4">
                                <ReCAPTCHA
                                    sitekey="6LdrkeMqAAAAAH0Or42_kWsqhX-y9RhnT4cd6Y8x"
                                    onChange={handleCaptchaChange}
                                />
                            </div>
                        )}

                        <motion.button 
                            className="bg-yellow-600 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-yellow-700 transition-transform transform hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {captchaVisible && !captchaVerified ? 'Count Me In' : 'Count Me In'}
                        </motion.button>
                    </form>
                </div>

                {/* Social Media Links with More Spacing */}
                <div className="flex justify-center gap-6 sm:gap-8">
                    <a href="#" className="text-2xl sm:text-3xl text-white hover:text-gray-300"><FaFacebook /></a>
                    <a href="#" className="text-2xl sm:text-3xl text-white hover:text-gray-300"><FaTwitter /></a>
                    <a href="#" className="text-2xl sm:text-3xl text-white hover:text-gray-300"><FaInstagram /></a>
                </div>
            </div>

            {/* Footer Subheading - Stays at Bottom */}
            <footer className="text-center text-lg sm:text-xl text-yellow-300 absolute bottom-4 w-full">
                🎉 Bharat's Most Exciting Way to Play Big and Win Bigger 💰
            </footer>

            {/* Multi-Layered Animated Gradient Background */}
            <motion.div 
                className="bg-animated-gradient"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />

                        {/* Multi-Layered Animated Gradient Background */}
                        <motion.div 
                className="bg-animated-gradient-2"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />

        </div>
    );
}
