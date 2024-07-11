import styles from './index.module.css'

export default function About() {
    return (
        <section className={styles.banner}>
            <div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                <div className={styles.line}/>
                <p className={styles.about_date}>08.08.2021</p>
            </div>
        </section>
    )
}