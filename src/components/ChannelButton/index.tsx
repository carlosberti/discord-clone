import React from 'react';

import s from './styles'

export interface ChannelButtonProps {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({channelName, selected}) => {
    return (
        <s.Container className={selected ? 'active' : ''}>
            <div>
                <s.HashtagIcon />
            <span>{channelName}</span>
            </div>
            <div>
                <s.InviteIcon />
                <s.SettingsIcon />
            </div>
        </s.Container>
    )
};

export default ChannelButton