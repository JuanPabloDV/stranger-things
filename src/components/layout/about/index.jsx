import styles from './index.module.css'

export default function About() {
    return (
        <section className={styles.banner}>
            <div>
                <h2>MISTÉRIOS, AMIZADES E O SOBRENATURAL SE ENCONTRAM EM HAWKINS.</h2>
                <p className={styles.text}>Explore o enigma de Stranger Things, onde coragem e laços inquebráveis enfrentam perigos de outro mundo.</p>
                <div className={styles.line}/>
                <p className={styles.about_date}>23.11.2024</p>
            </div>
        </section>
    )
}