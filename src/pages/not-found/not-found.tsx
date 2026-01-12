import styles from "./not-found.module.css";

export function NotFound() {
    return (
        <div className={styles["not-found"]}>
            <h2 className={styles["not-found__title"]}>Упс... Данной страницы нет</h2>
            <p className={styles["not-found__description"]}>Попробуйте изменить запрос или указать верную ссылку</p>
        </div>
    )
}