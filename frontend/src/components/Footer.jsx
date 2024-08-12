import React from 'react'
import './Css/FooterDiv.css'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="contact-info">
                    <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
                    <p>Call: <a href="tel:+1234567890">+1234567890</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
                    <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
                </div>
            </footer>
        </div>
    )
}
