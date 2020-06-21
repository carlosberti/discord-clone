import styled from 'styled-components';
// import { ExpandMore } from 'styled-icons/material'

export default {
    Container: styled.div`
        display: flex;
        align-items: center;
        background-color: transparent;
        padding: 4px 16px;
        margin-right: 4px;

        &.mention {
            background-color: var(--mention-message);
            border-left: 2px solid var(--mention-detail);
            padding-left: 14px;
        }

        & + div {
            margin-top: 13px;
        }
    `,
    Avatar: styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--secondary);

        &.bot {
            background-color: var(--mention-detail);
        }
    `,
    Message: styled.div`
        display: flex;
        justify-content: space-between;
        flex-flow: column nowrap;
        min-height: 40px;
        margin-left: 17px;
    `,
    Header: styled.div`
        display: flex;
        align-items: center;

        > strong {
            color: var(--white);
            font-size: 16px;
        }

        > span {
            margin-left: 6px;
            background-color: var(--discord);
            color: var(--white);
            border-radius: 4px;
            padding: 4px 5px;
            text-transform: uppercase;
            font-size: 11px;
            font-weight: 0;
        }

        > time {
            margin-left: 6px;
            color: var(--gray);
            font-size: 13px;
        }
    `,
    Content: styled.div`
        text-align: left;
        font-size: 16px;
        color: var(--white);
    `,
}