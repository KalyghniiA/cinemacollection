import styles from "./error.module.css";

export function Error() {
    return (
        <div className={styles["error"]}>
            <h2 className={styles["error__title"]}>Упс... Ничего не найдено</h2>
            <p className={styles["error__description"]}>Попробуйте изменить запрос или ввести более точное название фильма</p>
        </div>
    )
}