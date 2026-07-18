import React from "react";
import styles from "@/app/styles/usermodal.module.css";
import { useAuth } from "@/app/authcontext/AuthContext";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TiUserOutline } from "react-icons/ti";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";



const UserModal = ({ onClose, setUsermodal }) => {
  const { user, logout } = useAuth();
  const handlelogout = () => {
    logout();
    setUsermodal(false);
  };
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.userphone}>
        <p>
          <span className={styles.icon}>
            <HiMiniUserCircle />
          </span>

          {user?.phone}
        </p>
      </div>
      <div className={styles.userinfo}>
        <span >
          <TiUserOutline className={styles.icon}/>
        </span>
        <Link href="/userprofile">
        
        <p>اطلاعات حساب کاربری</p>
        </Link>
      </div>
      <div className={styles.logoutbtn}>
        <span><AiOutlineLogout className={styles.icon}/></span>
        <p onClick={handlelogout}>خروج از حساب کاربری</p>
      </div>
    </div>
  );
};

export default UserModal;
