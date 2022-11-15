import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-height: 77vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  color: white;
`;
export const Btn = styled.button`
  width: 20rem;
  height: 2.7rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

export default HomeStyled;
