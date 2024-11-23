import styles from './index.module.css';

export default function ArticleCard({ img, data, title, text, img_author, author, job }) {
    return (
        <div className={styles.card}>
            <img src={img}/>
            <div>
                <p>{data}</p>
                <h3>{title}</h3>
                <p className={styles.cardDescription}>{text}</p>
                <div className={styles.card_line}></div>

                <div className={styles.card_author}>
                    <img src={img_author} alt="Autor"/>
                    <div>
                        <span>By {author}</span>
                        <span>{job}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}