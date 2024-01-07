import React, { useState, useEffect } from 'react';

import Section from '../components/Section'
import OpenSourceCard from '../components/OpenSourceCard'

import jsonData from '../data/OpenSourceData.json';

function OpenSource() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Set the items state with the imported JSON data
        setItems(jsonData);
    }, []);


    return (
        <Section title={"Open source"} id={"OpenSource"}>

            <div className='row card-section mt-3'>

                {items
                    // Filter out open source where 'show' is false
                    .filter(openSource => openSource.show)
                    .map((openSource) => (
                        <div className='col-12' key={openSource.id}>
                            <OpenSourceCard
                                data={openSource}
                            />
                        </div>
                    ))}

            </div>


        </Section>
    );
}

export default OpenSource;