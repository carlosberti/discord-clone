import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

import s from './styles'

const Layout: React.FC = () => {
    return (
        <s.Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <UserList />
            <ChannelData />
        </s.Grid>
    )
};

export default Layout