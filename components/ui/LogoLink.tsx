import { headerLogo } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoLink: React.FC = () => {
    return (
        <div className="mb-4 text-center sm:mb-0">
            <Link href="/">
                <Image src={headerLogo} alt="Company Logo" width={180} height={50} priority />
            </Link>
        </div>
    );
};

export default LogoLink;
