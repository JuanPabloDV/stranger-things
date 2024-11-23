import ArticleCard from "../articleCard";
import Card_image_1 from '../../../assets/img/cards/card-1.png';
import Card_image_2 from '../../../assets/img/cards/card-2.png';
import Card_image_3 from '../../../assets/img/cards/card-3.png';
import Card_image_4 from '../../../assets/img/cards/card-4.png';
import Card_image_5 from '../../../assets/img/cards/card-5.png';
import Card_author from '../../../assets/img/cards/author.png';
import styles from './index.module.css';

export default function Articles() {
    const cards = [
        {
            id: 1,
            img: Card_image_2,
            data: '08.08.2024',
            title: 'Eleven (Onze)',
            text: 'Eleven, uma garota com poderes telecinéticos, é a peça central do grupo. Criada em laboratório, ela aprende sobre amizade, amor e liberdade enquanto luta contra forças sobrenaturais e o próprio',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 2,
            img: Card_image_1,
            data: '08.08.2024',
            title: 'Mike Wheeler',
            text: 'Mike é um garoto leal e líder nato do grupo de amigos. Ele é destemido e sempre coloca os outros antes de si. Sua ligação com Eleven e sua determinação para proteger Hawkins são traços marcantes.',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 3,
            img: Card_image_3,
            data: '08.08.2024',
            title: 'Eddie Munson',
            text: 'Eddie é o líder do Hellfire Club, fã de heavy metal e sempre leal aos amigos, enfrentando até os maiores perigos com coragem.',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 4,
            img: Card_image_5,
            data: '08.08.2024',
            title: 'Dustin Henderson',
            text: 'O carismático Dustin é o alívio cômico do grupo. Inteligente e curioso, ele frequentemente encontra soluções criativas para os problemas, além de trazer otimismo e energia para a equipe.',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
        {
            id: 5,
            img: Card_image_4,
            data: '08.08.2024',
            title: 'Max Mayfield',
            text: 'Max é uma skatista independente, desafiadora e corajosa, que se junta ao grupo em Hawkins e enfrenta os perigos sobrenaturais com força e determinação',
            img_author: Card_author,
            author: 'Jennifer Lawrence',
            job: 'Thinker & Designer'
        },
    ];

    return (
        <section className={styles.articles_container}>
            <div>
                <div className={styles.articles_title}>
                    <h2>Personagens</h2>
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