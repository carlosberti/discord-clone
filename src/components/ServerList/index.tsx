import React from 'react';
import ServerButton from '../ServerButton'
import s from './styles'

interface Servers {
    name: string;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
};

const Servers: Servers[] = [
    {
        name: '2',
        mentions: 80
    },
    {
        name: '3',
        hasNotifications: true
    },
    {
        name: '4',
        mentions: 3
    },
    {
        name: '5'
    },
    {
        name: '6',
        hasNotifications: true
    },
    {
        name: '7'
    },
    {
        name: '8',
        mentions: 10
    },
    {
        name: '9'
    }
]

const ServerList: React.FC = () => {
    return (
        <s.Container>
            <ServerButton isHome/>
            <s.Divider />
            {Servers.map(server => {
                const {name, ...rest} = server
                return (
                    <ServerButton key={name} {...rest}/>
                )
            })}
        </s.Container>
    )
}

export default ServerList;