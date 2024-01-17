import React from "react";
import './Svg.css';

const Svg = ({ variant }) => {
    const renderVariantOne = () => (
        <svg className="svg-variant1" viewBox="0 0 40.7 40" xmlns="http://www.w3.org/2000/svg">
            <path className="path-variant1" d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z"></path>
        </svg>
    );

    const renderVariantTwo = () => (
        <svg className="svg-variant2" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg">
            <path className="path-variant2" fillRule="evenodd" clipRule="evenodd" d="M12.315.351a1.2 1.2 0 010 1.698L8.364 6l3.951 3.951a1.2 1.2 0 01-1.697 1.697l-3.951-3.95-3.952 3.95a1.2 1.2 0 11-1.697-1.697L4.97 6 1.018 2.049A1.2 1.2 0 012.715.35l3.952 3.952L10.618.35a1.2 1.2 0 011.697 0z"></path>
        </svg>
    );

    return (
        <div>
            {variant === 'variant1' && renderVariantOne()}
            {variant === 'variant2' && renderVariantTwo()}
        </div>
    );
};

export default Svg;