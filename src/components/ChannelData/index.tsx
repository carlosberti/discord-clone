import React from 'react';
import ChannelMessage from '../ChannelMessage'

import s from './styles'

const ChannelData: React.FC = () => {
    const messageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <s.Container>
            <s.Messages ref={messageRef}>
                {Array.from(Array(20).keys()).map(n => ((
                    <ChannelMessage 
                    key={n}
                    author="Carlos Augusto"
                    content="Primeira mensagem"
                    date="30/06/2020"
                    />
                )))}
                <ChannelMessage 
                    author="F4LCKZ"
                    isBot
                    hasMention
                    content={
                        <>
                            <s.Mention>@Carlos Augusto</s.Mention>, sdjfhgsdfsgdflh
                        </>
                    }
                    date="30/06/2020"
                />
            </s.Messages>
            <s.InputWrapper>
                <s.Input type="text" placeholder="Conversar em" />
                <s.InputIcon />
            </s.InputWrapper>
        </s.Container>
    )
};

export default ChannelData