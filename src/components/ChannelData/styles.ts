import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material'

export default {
    Container: styled.div`
        grid-area: CD;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        background-color: var(--primary);
        padding: 4px 4px 4px 0;
        overflow-y: hidden;
    `,
    Messages: styled.div`
        display: flex;
        flex-flow: column nowrap;
        padding: 16px 0 20px;
        overflow-y: scroll;
        max-height: calc(100vh - 46px - 68px);

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--tertiary);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-track {
            background-color: var(--secondary);
        }
    `,
    InputWrapper: styled.div`
        width: 100%;
        padding: 0 16px;
    `,
    Input: styled.input`
        width: 100%;
        height: 44px;
        padding: 0 10px 0 57px;
        border-radius: 7px;
        color: var(--white);
        background-color: var(--chat-input);
        position: relative;

        &::placeholder {
            color: var(--gray);
        }

        ~ svg {
            position: relative;
            top: -50%;
            left: 14px;
            transition: 180ms ease-in-out;
        }
    `,
    InputIcon: styled(AlternateEmail)`
        width: 24px;
        height: 24px;
        color: var(--gray);
    `,
    Mention: styled.span`
        color: var(--link);
        cursor: pointer;
        
        &:hover {
            text-decoration: underline;
        }
    `,
}