import React from 'react';
import Logo from '../../assets/rocketseat.svg'
import s from './styles'

interface Servers {
    name?: string;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
};

const ServerButton: React.FC<Servers> = (props, {isHome}) => {
    console.log(props.mentions)
    return (
        <s.Button {...props}>
            {isHome && <img src={Logo} alt='rocketseat-logo' />}
        </s.Button>
    )
}

export default ServerButton;