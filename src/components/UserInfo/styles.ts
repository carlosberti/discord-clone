import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material'

export default {
    Container: styled.div`
        grid-area: UI;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--quaternary);
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    `,
    Profile: styled.div`
        display: flex;
        align-items: center;
    `,
    Avatar: styled.div`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--gray);
    `, 
    UserData: styled.div`
        display: flex;
        margin-left: 8px;
        flex-flow: column nowrap;

        > strong {
            font-size: 13px;
            color: var(--white);
            display: block;
        }

        > span {
            font-size: 13px;
            color: var(--gray);
        }
    `, 
    Icons: styled.div`
        display: flex;
        align-items: center;

        > svg {
            & + svg {
                margin-left: 7px;
        }
    `,
    MicIcon: styled(Mic)`
        width: 20px;
        height: 20px;
        color: var(--white);
        opacity: .7;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    `,
    HeadphoneIcon: styled(Headset)`
        width: 20px;
        height: 20px;
        color: var(--white);
        opacity: .7;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    `, 
    SettingIcon: styled(Settings)`
        width: 20px;
        height: 20px;
        color: var(--white);
        opacity: .7;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    `, 
}