import styled from "styled-components";

const FooterStyled = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding-top: 1rem;
  margin-top: -1rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  left: 0;
  bottom: 0; */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Icon = styled.img`
  width: 40px;
  margin: 10px;
`;

export default FooterStyled;
