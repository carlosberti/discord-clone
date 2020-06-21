import React from 'react';
import ChannelButton from '../ChannelButton'

import s from './styles'

interface Servers {
    name: string;
};

const Servers: Servers[] = [
    {
        name: 'sdas',
    },
    {
        name: 'bot-spam',
    },
    {
        name: 'chat',
    },
    {
        name: 'musicas'
    }
]

const ChannelList: React.FC = () => {
    return (
        <s.Container>
            <s.Category>
                <span>Canais de texto</span>
                <s.AddCategoryIcon />
            </s.Category>
            {Servers.map(server => <ChannelButton key={server.name} channelName={server.name} />)}
        </s.Container>
    )
};

export default ChannelList