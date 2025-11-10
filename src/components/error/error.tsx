import styles from "./error.module.css";

export function Error() {
    return (
        <div className={styles["error"]}>
            <h2 className={styles["error__title"]}>Упс... возникла ошибка</h2>
            <p className={styles["error__description"]}>Попробуйте обратиться позже</p>
        </div>
    )
}