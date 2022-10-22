import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';


function Body() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
          case "About":
            return <About />;
          case 'Contact Me':
            return <Contact />
          case 'Portfolio':
            return <Portfolio />
          default:
            return <About />;
        }
    };

    return (
        <div>
            <Nav 
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Body;