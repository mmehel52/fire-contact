import styled from "styled-components";
import { Link } from "react-router-dom";
const NavStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.responsive}) {
  }
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin: 0 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.body};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 100%;
    text-align: center;
  }
`;

export const NavImg = styled.img`
  width: 8rem;
  padding: 1rem;
`;
export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    display: block;
  }
`;
export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`;
export default NavStyled;
