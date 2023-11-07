// Navbar.tsx
import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
    users: string[];
    setSelectedUser: (user: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ users, setSelectedUser }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            {isOpen && (
                <ul>
                    {users.map((user: string, index: number) => (
                        <li key={index} onClick={() => {
                            setSelectedUser(user);
                            setIsOpen(false);
                        }}>{user}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
