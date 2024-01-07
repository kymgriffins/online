import React, { useState, useEffect } from 'react';

import Section from '../components/Section'
import ArticleCard from '../components/ArticleCard'

import jsonData from '../data/ArticleData.json';

function Articles() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Set the items state with the imported JSON data
        setItems(jsonData);
    }, []);


    return (
        <Section title={"Articles & publications"} id={"Articles"}>

            <div className='row card-section mt-3'>

                {items
                    // Filter out projects where 'show' is false
                    .filter(article => article.show)
                    .map((article) => (
                        <div className='col-12' key={article.id}>
                            <ArticleCard
                                data={article}
                            />
                        </div>
                    ))}

            </div>


        </Section>
    );
}

export default Articles;