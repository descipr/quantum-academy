import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


interface MobileMenuButtonProps {
    onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
    return (
        <button className="absolute right-2 top-3" onClick={onClick}>
            <FontAwesomeIcon className="text-3xl text-white" icon={faBars} />
        </button>
    )
}

export default MobileMenuButton
