import React from "react";
import FooterStyled, { Icon } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <p>MMEHEL, Copyright &copy; {new Date().getFullYear()}</p>
      </div>
      <div>
        <a
          href="https://linkedin.com/in/mustafa-mehel-354aab23b"
          target="_blanked"
        >
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />
        </a>
        <a className="p-3" href="https://github.com/mmehel52" target="_blanked">
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
        </a>
        <a href="https://mehelx5207@gmail.com" target="_blanked">
          <Icon
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt=""
          />
        </a>
      </div>
    </FooterStyled>
  );
};
export default Footer;
