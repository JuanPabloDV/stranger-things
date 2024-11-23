import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'
import styles from './index.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <h3>Contato</h3>
                    <p>lorem@teste.com</p>
                    <p>+55 11 99999999</p>
                </div>

                <div>
                    <h3>Redes Sociais</h3>
                    <a href="https://www.facebook.com" target="_blank"><FaFacebook/></a>
                    <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
                    <a href="https://youtube.com" target="_blank"></a><FaYoutube/>
                    <a href="https://www.pinterest.com" target="_blank"><FaPinterest/></a>
                </div>
            </div>
        </footer>
    )
}