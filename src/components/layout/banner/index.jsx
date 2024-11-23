import styles from './index.module.css';

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerInfo}>
                <h2>O MUNDO INVERTIDO ESTÁ MAIS PERTO DO QUE VOCÊ IMAGINA</h2>
                <div className={styles.bannerContent}>
                    <span>23.11.2024</span>
                    <div className={styles.division}/>
                    <span>Mergulhe no universo de Stranger Things: uma jornada de amizade, mistério e aventuras sobrenaturais que desafiam o tempo e o espaço.</span>
                </div>
            </div>
        </div>
    )
}