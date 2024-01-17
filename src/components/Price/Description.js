import React from "react";
import Svg from './Svg.js';
import './Description.css';

const TextVariants = ({ variant }) => {
    let text;

    switch (variant) {
        case 'interior1':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Vacuuming</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Dusting</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Dry Brushing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Shampooing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Steam Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Spot Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Surface Conditioning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Deodorizing</li>
                </ul>
            break;
        case 'interior2':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Vacuuming</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Dusting</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Dry Brushing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Shampooing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Steam Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Spot Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Surface Conditioning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Deodorizing</li>
                </ul>
            break;
        case 'interior3':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Vacuuming</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Dusting</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Dry Brushing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Shampooing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Steam Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Spot Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Surface Conditioning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Deodorizing</li>
                </ul>
            break;
        case 'polishing1':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Wash and Decontamination</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Sealant or Ceramic Coating</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Single-Stage Polishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Paint Enhancement</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Two-Stage Polishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Comprehensive Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Three-Stage Paint Correction</li>
                </ul>
            break;
        case 'polishing2':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Wash and Decontamination</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Sealant or Ceramic Coating</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Single-Stage Polishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Paint Enhancement</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Two-Stage Polishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Comprehensive Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Three-Stage Paint Correction</li>
                </ul>
            break;
        case 'polishing3':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Wash and Decontamination</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Sealant or Ceramic Coating</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Single-Stage Polishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Paint Enhancement</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Two-Stage Polishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Comprehensive Cleaning</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Three-Stage Paint Correction</li>
                </ul>
            break;
        case 'ppf1':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Front bumper</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Partial Hood</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Side Mirrors</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Full Hood</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Fenders (Partial)</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Headlights and Fog Lights</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Full Vehicle Coverage</li>
                </ul>
            break;
        case 'ppf2':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Front bumper</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Partial Hood</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Side Mirrors</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Full Hood</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Fenders (Partial)</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Headlights and Fog Lights</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant2" />Full Vehicle Coverage</li>
                </ul>
            break;
        case 'ppf3':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Front bumper</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Partial Hood</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Side Mirrors</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Full Hood</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Fenders (Partial)</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Headlights and Fog Lights</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Full Vehicle Coverage</li>
                </ul>
            break;
        case 'wheel':
            text =
                <ul className="text-variant-ul">
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Alloy Wheel Refinishing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Wheel Inspection</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Balancing</li>
                    <li className="text-variant-li"><Svg className='text-variant-svg' variant="variant1" />Color Matching</li>
                </ul>
            break;
        default:
            text = 'Default text';
    }

    return <div>{text}</div>;
};

export default TextVariants;