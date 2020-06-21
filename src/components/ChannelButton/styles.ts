import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export default {
    Container: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        padding: 5px 3px;
        border-radius: 5px;
        transition: background-color 0.2s;

        > div {
            display: flex;
            align-items: center;
        }

        > div span {
            margin-left: 5px;
            color: var(--senary);
        }

        &.active, &:hover {
            background-color: var(--quinary);
            
            svg {
                display: inline;
            }

            > div span {
                color: var(--white);
            }
        }
    `,
    HashtagIcon: styled(Hashtag)`
        width: 20px;
        height: 20px;
        color: var(--symbol);
    `,
    InviteIcon: styled(PersonAdd)`
        width: 16px;
        height: 16px;
        color: var(--symbol);
        cursor: pointer;
        transition: color 0.2s;
        margin-right: 4px;
        display: none;   

        &:hover {
            color: var(--white)
        }
    `,
    SettingsIcon: styled(Settings)`
        width: 16px;
        height: 16px;
        color: var(--symbol);
        display: none;
        cursor: pointer;
        transition: color 0.2s;    

        &:hover {
            color: var(--white)
        }
    `,
}