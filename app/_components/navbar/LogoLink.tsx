
import { headerLogo } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoLink: React.FC = () => {
    return (
        <div className=" text-center sm:mb-0">
            <Link href="/">
                <Image src={headerLogo} alt="Company Logo" width={159} height={55} priority />
            </Link>
        </div>
    );
};

export default LogoLink;
