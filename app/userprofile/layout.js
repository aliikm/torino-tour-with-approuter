import UserOption from "@/components/module/user/UserOption";
import styles from "@/app/styles/useroption.module.css";

export default function UserProfileLayout({ children }) {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <UserOption />
      </aside>

      <main>{children}</main>
    </div>
  );
}
