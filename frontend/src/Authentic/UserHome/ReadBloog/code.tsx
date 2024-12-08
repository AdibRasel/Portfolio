import React, { useEffect } from 'react';

const MyComponent: React.FC = () => {
    // Function to be called on every click
    const handleClick = () => {
        console.log("Page clicked!");
        // Place your logic here
    };

    useEffect(() => {
        // Add click event listener to the entire window
        window.addEventListener('click', handleClick);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            <h1>Click anywhere on the page</h1>
            <p>Whenever you click anywhere, the function will be triggered.</p>
        </div>
    );
};

export default MyComponent;
