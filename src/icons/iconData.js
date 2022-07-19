import FolderSharedIcon from "@mui/icons-material/FolderShared";
import HomeIcon from "@mui/icons-material/Home";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

export const iconData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "menu-text",
  },
  {
    title: "Bio",
    path: "/bio",
    icon: <FolderSharedIcon />,
    cName: "menu-text"
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon:  <FolderSharedIcon />,
    cName: "menu-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <ContentPasteSearchIcon />,
    cName: "menu-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <PhoneEnabledIcon />,
    cName: "menu-text",
  },

];
