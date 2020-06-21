import React from 'react';

import s from './styles'

const ChannelInfo: React.FC = () => {
    return (
        <s.Container>
            <s.HashtagIcon />
            <s.Title>chat-livre</s.Title>
            <s.Divider />
            <s.Description>Canal aberto para conversas</s.Description>
        </s.Container>
    )
};

export default ChannelInfo