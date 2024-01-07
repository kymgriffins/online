import React from 'react';

// IMPORTANT
// Please retain this copyright link

function CopyrightLabel(props) {

    return (
        <footer className='row text-center'>
            <h5>© Design by {new Date().getFullYear()} Ben Oldham</h5>
        </footer>
    );
}

export default CopyrightLabel;