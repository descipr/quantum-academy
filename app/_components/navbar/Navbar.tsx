'use client';
import React, { useState } from 'react';
import LogoLink from './LogoLink';
import NavbarLinks from './NavbarLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileDrawer from './MobileDrawer';


const Navbar: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    return (
        <>
            <nav className=" w-full relative py-4 hidden md:flex items-center justify-between z-10 mx-auto bg-white">
                <div className='md:flex items-center justify-between z-10 mx-auto w-full max-w-5xl'>
                    <LogoLink />
                    <NavbarLinks />
                </div>
            </nav>
            <nav className="md:hidden relative flex items-center justify-between mb-4 z-10 w-full pr-4 bg-white">
                <LogoLink />
                {!isDrawerOpen && <MobileMenuButton onClick={handleDrawerToggle} /> }
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </nav>
        </>
    );
};

export default Navbar;
