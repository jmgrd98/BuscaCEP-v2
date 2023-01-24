import styled from "styled-components";

export const CardStyle = styled.section`

:root{
  --primary: #2E4057;
  --secondary: #66A182;
  --terciary: #C0D461;
}

background-color: var(--terciary);
color: white;
width: 100%;
border-radius: 20px;

    .cardContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .cardHeader{
        border: 3px solid var(--terciary);
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

    .mapContainer{
        border: 5px solid blue;
        border-radius: 10px;
        width: 100%;
        height: 300px;
    }
`