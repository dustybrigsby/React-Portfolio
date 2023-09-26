import { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Header = ({ currentSection, setCurrentSection }) => {
    return (
        <header>
            <h1>Brigsby</h1>
            <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </header>
    );
};

export default Header;