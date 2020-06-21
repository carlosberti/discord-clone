import React from 'react';

import s from './styles'

interface User {
    nickname: string;
    isBot?: boolean;
    online: boolean;
}

const Users: User[] = [
    {
        nickname: 'Carlos Augusto',
        online: true
    },
    {
        nickname: 'KC',
        online: true
    },
    {
        nickname: 'MT$',
        online: false
    },
    {
        nickname: 'NANDO',
        online: false
    },
    {
        nickname: 'Growlandia',
        online: false
    },
    {
        nickname: 'F4LCKZ',
        online: true,
        isBot: true
    }
]

const UserRow: React.FC<User> = ({ nickname, isBot }) => (
    <s.User>
        <s.Avatar className={isBot ? 'bot' : ''}/>
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span>}
    </s.User>
)

const offlineUsers = () => {
    const users = Users.filter(user => !user.online);
    return (
        <>
            <s.Role>Offline - {users.length}</s.Role>
            {users.map(user => {
                const {nickname, ...rest} = user;
                return (
                    <UserRow nickname={nickname} {...rest} />
                )
            })}
        </>
    )
}

const OnlineUsers = () => {
    const users = Users.filter(user => user.online);
    return (
        <>
            <s.Role>Disponível - {users.length}</s.Role>
            {users.map(user => {
                const {nickname, ...rest} = user;
                return (
                    <UserRow nickname={nickname} {...rest} />
                )
            })}
        </>
    )
}

const UserList: React.FC = () => {
    return (
        <s.Container>
            {OnlineUsers()}
            {offlineUsers()}
        </s.Container>
    )
};

export default UserList