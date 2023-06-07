"use client";
import { FC, ReactNode } from "react";

import { ContactInfoIcon } from "@/app/types/types";

import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

type ContactInfoProps = {
  icon: ContactInfoIcon;
  link?: string;
  text: string;
};
const ContactInfo: FC<ContactInfoProps> = ({ icon, text, link }) => {
  const iconMap: { [key in ContactInfoIcon]: ReactNode } = {
    [ContactInfoIcon.OpenHours]: (
      <QueryBuilderIcon className="material-icons" />
    ),
    [ContactInfoIcon.Location]: <LocationOnIcon className="material-icons" />,
    [ContactInfoIcon.Phone]: <CallIcon className="material-icons" />,
    [ContactInfoIcon.Email]: <EmailIcon className="material-icons" />,
  };
  return (
    <li>
      {iconMap[icon]}{" "}
      {link ? <Link href={link}>{text}</Link> : <span>{text}</span>}
    </li>
  );
};

export default ContactInfo;
