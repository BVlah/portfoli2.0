import React, { useState } from 'react';
import About from "../About";

export default function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
          case "About":
            return <About />;
        default:
            return <About />;
        }
    };

    return (
        <div>
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}