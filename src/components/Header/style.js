import styled from "styled-components";

export const HeaderStyle = styled.header`
header{
  background-color: blue;
  color: white;
  width: 100%;
  padding: 20px;
  position: absolute;
  /* gap: 10%; */
  top: 0;
  font-size: .7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo{
  display: flex;
  align-items: center;
  gap: 5px;
}

.SearchForm{
  display: flex;
  gap: 10px;
}

input{
  border-radius: 10px;
  padding: 5px;
}

main{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 10px;
}
`