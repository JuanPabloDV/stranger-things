import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import styles from './index.module.css';

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <h1>FUTURO DEV</h1>
            </div>

            <div>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <span className={styles.navbar_separator}></span>
                    <li><FaFacebook/></li>
                    <li><FaTwitter/></li>
                    <li><FaYoutube/></li>
                    <li><FaPinterest/></li>
                </ul>
            </div>
        </nav>
    )
}