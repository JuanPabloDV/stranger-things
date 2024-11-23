import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import styles from './index.module.css';

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <h1>Stranger Things</h1>
            </div>

            <div>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank"><FaFacebook/></a></li>
                    <li><a href="https://twitter.com" target="_blank"><FaTwitter/></a></li>
                    <li><a href="https://youtube.com" target="_blank"></a><FaYoutube/></li>
                    <li> <a href="https://www.pinterest.com" target="_blank"><FaPinterest/></a></li>
                </ul>
            </div>
        </nav>
    )
}