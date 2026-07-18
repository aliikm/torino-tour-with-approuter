"use client";

import { FaUser } from "react-icons/fa";
// import styles from "@/app/styles/header.module.css";
import styles from "@/app/styles/userbox.module.css";
import { useAuth } from "@/app/authcontext/AuthContext";
import { SlArrowDown } from "react-icons/sl";
const UserBox = ({ openModal, toggleUserModal }) => {
  const { user, logout } = useAuth();
  return (
    <div className={styles.container}>
      {user ? (
        <div className={styles.userlogin}>
          <p>
            <FaUser
              className={styles.usericon}
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            {user.phone}

            <SlArrowDown
              onClick={toggleUserModal}
              className={styles.togglemodal}
            />
          </p>
        </div>
      ) : (
        <button onClick={openModal} className={styles.button}>
          <span className={styles.btnlogin}>
            <FaUser /> ورود / ثبت نام
          </span>
          <FaUser className={styles.iconuser} />
        </button>
      )}
    </div>
  );
};

export default UserBox;
