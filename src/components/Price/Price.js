import React, { useState, useEffect } from "react";
import './Price.css';
import TextVariants from './Description.js';

function Price() {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setSelectedItem(0);
    }, []);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div id="scrollToHomePrice">
            <div className="price-span">PRICE LIST OF SERVICES</div>
            <div className="price-main">
                <div className="price-container">
                    <ul className="price-ul">
                        <li className={`price-li ${selectedItem === 0 ? 'price-li-selected' : ''}`} onClick={() => handleItemClick(0)}>Interior Detailing</li>
                        <li className={`price-li ${selectedItem === 1 ? 'price-li-selected' : ''}`} onClick={() => handleItemClick(1)}>Car Polishing</li>
                        <li className={`price-li ${selectedItem === 2 ? 'price-li-selected' : ''}`} onClick={() => handleItemClick(2)}>PPF Protection</li>
                        <li className={`price-li price-li-last ${selectedItem === 3 ? 'price-li-selected' : ''}`} onClick={() => handleItemClick(3)}>Wheel Repair</li>
                    </ul>
                </div>
            </div>
            <div className="packages-main">
                <div className="tutuaa">
                    <div className={`box-0 selected-3-box ${selectedItem === 3 ? 'selected-3-box-none' : ''}`}>
                        <div className="package-circle package-circle-first"></div>
                        <div className="package-title">{`${selectedItem === 0 ? 'Basic' : selectedItem === 1 ? 'Basic' : selectedItem === 2 ? 'Basic' : ''}`}</div>
                        <div className="package-second-title">{`${selectedItem === 0 ? 'Dry Interior Cleaning' : selectedItem === 1 ? '1 Stage Polishing' : selectedItem === 2 ? 'Essential Protection Package' : ''}`}</div>
                        <div className="package-price">{selectedItem === 0 ? '€125' : selectedItem === 1 ? '€120' : selectedItem === 2 ? '€300' : ''}</div>
                        <div className="package-description">{selectedItem === 0 ? <TextVariants variant="interior1" /> : selectedItem === 1 ? <TextVariants variant="polishing1" /> : selectedItem === 2 ? <TextVariants variant="ppf1" /> : 'else'}</div>
                    </div>
                    <div className={`box-1 selected-3-box ${selectedItem === 3 ? 'selected-3-box-one' : ''}`}>
                        <div className="package-circle package-circle-second"></div>
                        <div className="package-title">{`${selectedItem === 0 ? 'Standard' : selectedItem === 1 ? 'Standard' : selectedItem === 2 ? 'Standard' : 'Standard'}`}</div>
                        <div className="package-second-title">{`${selectedItem === 0 ? 'Wet Interior Cleaning' : selectedItem === 1 ? '2 Stage Polishing' : selectedItem === 2 ? 'Advanced Shield Package' : 'Wheel Repair Package'}`}</div>
                        <div className="package-price">{selectedItem === 0 ? '€170' : selectedItem === 1 ? '€180' : selectedItem === 2 ? '€600' : '€100'}</div>
                        <div className="package-description">{selectedItem === 0 ? <TextVariants variant="interior2" /> : selectedItem === 1 ? <TextVariants variant="polishing2" /> : selectedItem === 2 ? <TextVariants variant="ppf2" /> : <TextVariants variant="wheel" />}</div>
                    </div>
                    <div className={`box-2 selected-3-box ${selectedItem === 3 ? 'selected-3-box-none' : ''}`}>
                        <div className="package-circle"></div>
                        <div className="package-title">{`${selectedItem === 0 ? 'Premium' : selectedItem === 1 ? 'Premium' : selectedItem === 2 ? 'Premium' : ''}`}</div>
                        <div className="package-second-title">{`${selectedItem === 0 ? 'Trifecta Interior Cleaning' : selectedItem === 1 ? '3 Stage Polishing' : selectedItem === 2 ? 'Ultimate Defense Package' : ''}`}</div>
                        <div className="package-price">{selectedItem === 0 ? '€220' : selectedItem === 1 ? '€300' : selectedItem === 2 ? '€2500' : ''}</div>
                        <div className="package-description">{selectedItem === 0 ? <TextVariants variant="interior3" /> : selectedItem === 1 ? <TextVariants variant="polishing3" /> : selectedItem === 2 ? <TextVariants variant="ppf3" /> : 'else'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price;
