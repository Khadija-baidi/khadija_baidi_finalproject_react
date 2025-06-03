import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            
            if (difference <= 0) {
                // If target date has passed, set all values to 0
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                return false; // Return false to clear interval
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
            
            return true; // Continue interval
        };

        // Calculate immediately
        const shouldContinue = calculateTimeLeft();
        if (!shouldContinue) return;

        // Then set up interval
        const timer = setInterval(() => {
            const shouldContinue = calculateTimeLeft();
            if (!shouldContinue) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
};

export default useCountdown; 