import styled from "styled-components";

export const CardStyle = styled.section`

background-color: blue;
color: white;
width: 100%;
border-radius: 20px;

    .cardContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .cardHeader{
        border: 3px solid blue;
        border-radius: 20px 20px 0px 0px;
        display: flex;
        justify-content: center;
        padding: 10px;
        color: blue;
        background-color: white;
    }

    span{
        font-weight: bold;
    }

    .cardBody{
        padding: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    }

    button{
        background-color: transparent;
        color: white;
    }
`