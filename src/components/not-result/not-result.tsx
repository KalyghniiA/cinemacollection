import styles from "./not-result.module.css";

export function NotResult() {
    return (
        <div className={styles["not-result"]}>
            <h2 className={styles["not-result__title"]}>Упс... Ничего не найдено</h2>
            <p className={styles["not-result__description"]}>Попробуйте изменить запрос или ввести более точное название фильма</p>
        </div>
    )
}