import React from 'react';

import OpenSourceCard from '../components/OpenSourceCard';
import Section from '../components/Section';

import jsonData from '../data/OpenSourceData.json';

function OpenSource() {

    const items = jsonData;


    return (
        <Section title={"Affiliates"} id={"OpenSource"}>

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