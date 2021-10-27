import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

    export const Nav = styled.nav`
    background : #000;
    height : 8vh;
    display : flex;
    justify-content: space-between;
    z-index: 10;
    `

    export const LogoContainer = styled.div`
    display: flex;
    flex: 50%;
    justify-content: flex-start;
    `

    export const SearchBarContainer = styled.form`
    display: flex;
    flex: 50%;
    justify-content: flex-end;
    align-items: center;
`

    export const NavLink = styled(Link)`
        color: #FFF;
        display : flex;
        align-items : center;
        text-decoration : none;
        padding : 0 1rem;
        height : 100%;
        cursor: pointer;
        justify-content: flex-start;

        &.active {
            color: #15cdfc
        }
    `

    
    export const NavBtn = styled.button`
        display : flex;
        align-items : center;
        margin-right : 24px;
        border: none;
        border-radius: 8px;
        background : #000;
        margin-left: 3px;
        
        &:disabled {
           opacity: 0.7;
        }

        @media screen and (max-width : 768px) {
            display : none;
        }
    `

    export const NavBtnContent = styled.p`
        border-radius: 4px;
        font-size: 15px;
        background: #256ce1;
        padding: 11px 25px;
        margin-left: 1px;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
    `
    export const NavBarInput = styled.input`
    height: 40px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    width: 220px;
    padding-left: 10px;
    border: none;
    `
    export const Container = styled.div`
    background-color: red;
    display: flex;
`