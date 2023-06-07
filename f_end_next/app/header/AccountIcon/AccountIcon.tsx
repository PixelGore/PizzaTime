"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import { getAuthMe } from "@/app/Redux/Selectors/authSelector";
import "../Header.scss";

export default function AccountIcon() {
  const me = useSelector(getAuthMe);
  return (
    <span className="login-text">
      {me.length > 0 ? (
        <AccountCircleIcon className="material-icons" />
      ) : (
        <LoginIcon className="material-icons" />
      )}
    </span>
  );
}
