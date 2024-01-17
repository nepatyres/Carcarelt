import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Email.css';

function Email() {
    return (
        <div className="email-main">
            <span className="email-span">MESSAGE US</span>
            <form action="https://formsubmit.co/contactjulijus@gmail.com" method="POST">
                <div className="mb-3">
                    <input type="name" className="form-control email-input" id="exampleFormControlInput2" placeholder="Name" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control email-input" id="exampleFormControlInput1" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input type="phone" className="form-control email-input" id="exampleFormControlInput3" placeholder="Phone" required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control email-input" id="exampleFormControlTextarea1" rows="3" placeholder="Your message" required></textarea>
                </div>
                <div className='email-btn'>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Email;