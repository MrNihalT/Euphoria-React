import React from "react";

function DealSection(props) {
    return (
        <div className="deal-section">
            <div className="deal-banner deal-banner1">
                <h3>Low Price</h3>
                <h1>High Coziness</h1>
                <p className="offer">UPTO 50% OFF</p>
                <button className="explore-deals">Explore Items</button>
            </div>

            <div className="deal-banner deal-banner2">
                <h3>Beyoung Presents</h3>
                <h1>Breezy Summer Style</h1>
                <p className="offer">UPTO 50% OFF</p>
                <button className="explore-deals">Explore Items</button>
            </div>
        </div>
    );
}

export default DealSection;
