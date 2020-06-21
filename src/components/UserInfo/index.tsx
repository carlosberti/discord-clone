import React from 'react';

import s from './styles'

const ServerName: React.FC = () => {
    return (
        <s.Container>
            <s.Profile>
                <s.Avatar />
                <s.UserData>
                    <strong>Carlos Augusto</strong>
                    <span>#123456</span>
                </s.UserData>
            </s.Profile>
            <s.Icons>
                <s.MicIcon />
                <s.HeadphoneIcon />
                <s.SettingIcon />
            </s.Icons>
        </s.Container>
    )
};

export default ServerName