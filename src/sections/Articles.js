import { useEffect, useState } from 'react';

import Section from '../components/Section';

import ArticleCard from '../components/ArticleCard';
import ArticlePopupModal from '../components/ArticlePopupModal';
import jsonData from '../data/ArticleData.json';

function Articles() {
    const [items, setItems] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        setItems(jsonData);
    }, []);

    const handleOpenArticle = (article) => setSelectedArticle(article);
    const handleCloseArticle = () => setSelectedArticle(null);

    return (
        <Section title={"Articles & publications"} id={"Articles"}>
            <div className='row card-section mt-3'>
                {items
                    .filter(article => article.show)
                    .map((article) => (
                        <div className='col-12' key={article.id}>
                            <ArticleCard
                                data={article}
                                onClick={() => handleOpenArticle(article)}
                            />
                        </div>
                    ))}
            </div>
            {selectedArticle && (
                <ArticlePopupModal article={selectedArticle} onClose={handleCloseArticle} />
            )}
        </Section>
    );
}

export default Articles;