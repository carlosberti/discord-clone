import styled from 'styled-components';
import { Add } from 'styled-icons/material'

export default {
    Container: styled.div`
        grid-area: CL;
        display: flex;
        flex-flow: column nowrap;
        padding: 24px 9.5px 0 16px;
        background-color: var(--secondary);
    `,
    Category: styled.div`
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
        
        > span {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 500;
            color: var(--gray);
        }
    `,
    AddCategoryIcon: styled(Add)`
        width: 21px;
        height: 21px;
        color: var(--symbol);
        cursor: pointer;
    `,
}