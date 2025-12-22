import React, { useState, useEffect } from 'react';
import { calculateAge } from '../utils/timeCalculations';

interface TimeCounterProps {
    birthdate: Date;
}

const TimeCounter: React.FC<TimeCounterProps> = ({ birthdate }) => {
    const [age, setAge] = useState(calculateAge(birthdate));

    useEffect(() => {
        const interval = setInterval(() => {
            setAge(calculateAge(birthdate));
        }, 1000 * 60 * 60); // Actualizar cada hora

        return () => clearInterval(interval);
    }, [birthdate]);

    return (
        <div className="text-terminal-green font-mono text-2xl tracking-wider">
            {age}
        </div>
    );
};

export default TimeCounter;
