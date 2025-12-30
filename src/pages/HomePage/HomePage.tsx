import React from 'react';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';

export const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
            <Footer />
        </div>
    );
};

export default HomePage;