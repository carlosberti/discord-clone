import styled from 'styled-components';

export default {
    Container: styled.div`
        grid-area: UL;
        display: flex;
        flex-flow: column nowrap;
        max-height: calc(100vh - 46px);
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--tertiary);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-track {
            background-color: var(--secondary)
        }
        background-color: var(--secondary);
        padding: 3px 6px 0 16px;
    `,
    Role: styled.span`
        margin-top: 20px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    `,
    User: styled.div`
        display: flex;
        align-items: center;
        margin-top: 5px;
        padding: 5px;
        cursor: pointer;
        border-radius: 4px;
        background-color: transparent;
        transition: background-color 0.2s;
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        > strong {
            margin-left: 13px;
            font-weight: 500;
            color: var(--white);
            opacity: 0.7;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        > span {
            margin-left: 9px;
            background-color: var(--discord);
            color: var(--white);
            border-radius: 4px;
            padding: 4px 5px;
            text-transform: uppercase;
            font-size: 11px;
            font-weight: 0;
        }
    `,
    Avatar: styled.div`
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        background-color: var(--primary);
        border-radius: 50%;

        &.bot {
            background-color: var(--mention-detail);
        }
    `,
}