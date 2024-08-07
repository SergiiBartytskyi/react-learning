import { HiUser } from "react-icons/hi";
import clsx from "clsx";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <>
      <HiUser className={clsx(css.myIcon)} size={24} />
    </>
  );
}
