import styled from "styled-components";

export const HeaderStyle = styled.header`

    background-color: blue;
    color: white;
    width: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
    font-size: .8rem;

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .SearchForm{
            display: flex;
            gap: 10px;
        }

        input{
            border-radius: 10px;
            padding: 5px;
        }

`