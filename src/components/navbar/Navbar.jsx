import NavStyled, {
  NavbarLink,
  NavImg,
  HamburgerMenu,
  MenuDiv,
} from "./NavbarStyled";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavStyled>
      <div>
        <NavImg
          src="https://icons.veryicon.com/png/o/education-technology/student-side/job-management.png"
          alt=""
        />
      </div>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu style={{ fontSize: "45px" }} />
      </HamburgerMenu>
      <MenuDiv isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <NavbarLink to="">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
      </MenuDiv>
    </NavStyled>
  );
}

export default Nav;
