import React from 'react';

import s from './styles';

interface ChannelMessage {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<ChannelMessage> = ({ author, date, content, hasMention, isBot}) => {
    return (
        <s.Container className={hasMention ? 'mention' : ''}>
            <s.Avatar className={isBot ? 'bot': ''}/>
            <s.Message>
                <s.Header>
                    <strong>
                        {author}
                    </strong>
                    {isBot && <span>Bot</span>}
                    <time>{date}</time>
                </s.Header>
                <s.Content>{content}</s.Content>
            </s.Message>
        </s.Container>
    )
};

export default ChannelMessage