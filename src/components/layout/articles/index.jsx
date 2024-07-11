import ArticleCard from "../articleCard";
import Card_image from '../../../assets/img/cards/card-1.png';
import Card_author from '../../../assets/img/cards/author.png';
import styles from './index.module.css';

export default function Articles() {
    const cards = [
        {
            id: 1,
            img: Card_image,
            data: '08.08.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 2,
            img: Card_image,
            data: '08.08.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 3,
            img: Card_image,
            data: '08.08.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 4,
            img: Card_image,
            data: '08.08.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 5,
            img: Card_image,
            data: '08.08.2024',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
    ];

    return (
        <section className={styles.articles_container}>
            <div>
                <div className={styles.articles_title}>
                    <h2>Popular topics</h2>
                </div>
                <div className={styles.articles_cards_wrap}>
                    {cards && cards.map((card) => (
                        <ArticleCard className={styles.article_card}
                            key={card.id} 
                            img={card.img} 
                            data={card.data} 
                            title={card.title} 
                            text={card.text}
                            img_author={card.img_author} 
                            author={card.author}
                            job={card.job}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}