import React from "react";
import { HeaderCont, Hospital, LogoImage } from "../LandingPageHeader/Header.styles";
import Avatar from "../Avatar/Avatar";
import Logo from "../../images/logo.png";

function Header() {
  console.error("stream deleted");
  console.error("stream deleted for hospital-demo-server.herokuapp.com/appointments/patient/sloits/<id>");
  console.info("RtmInvalidStatusError:: Informational Log");
  const myError = new Error("please improve your code");
  throw myError;
  return (
    <HeaderCont>
      <Hospital>
        {" "}
        <LogoImage src={Logo} alt="logo" sty /> Hospital
      </Hospital>
      <Avatar />
    </HeaderCont>
  );
}

export default Header;
