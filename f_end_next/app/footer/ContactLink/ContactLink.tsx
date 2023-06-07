"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import "../Footer.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VkIcon from "@/app/common/icons/VkIcon";
import { ContactLinkIcon } from "@/app/types/types";

type ContactLinkProps = {
  icon: ContactLinkIcon;
};
const ContactLink: FC<ContactLinkProps> = ({ icon }) => {
  const iconMap: { [key in ContactLinkIcon]: ReactNode } = {
    [ContactLinkIcon.YouTube]: <YouTubeIcon />,
    [ContactLinkIcon.Instagram]: <InstagramIcon />,
    [ContactLinkIcon.Facebook]: <FacebookIcon />,
    [ContactLinkIcon.Twitter]: <TwitterIcon />,
    [ContactLinkIcon.Vk]: (
      <VkIcon className="fill-white hover:fill-cyan-400 transition-colors duration-150" />
    ),
  };
  return (
    <li>
      <Link href="/">{iconMap[icon]}</Link>
    </li>
  );
};
export default ContactLink;
