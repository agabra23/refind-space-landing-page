import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Padding } from "@mui/icons-material";
import { LINKS } from "../contants";

const IconButtonStyles = {
  borderRadius: "15%",
  transition: "all 0.5s",
  padding: "0.3rem",
};

const Header = () => {
  const handleIconClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <header className="flex items-center justify-between p-4 px-12">
      <div>LOGO</div>
      <div className="flex items-center space-x-4">
        <IconButton
          color="inherit"
          sx={IconButtonStyles}
          onClick={(e) => handleIconClick(e, LINKS.facebook)}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          sx={IconButtonStyles}
          onClick={(e) => handleIconClick(e, LINKS.instagram)}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
