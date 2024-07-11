import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'
import styles from './index.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <h3>Contact the Publisher</h3>
                    <p>lorem@teste.com</p>
                    <p>+55 11 99999999</p>
                </div>

                <div>
                    <h3>Connections</h3>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaYoutube/>
                    <FaPinterest/>
                </div>
            </div>
        </footer>
    )
}