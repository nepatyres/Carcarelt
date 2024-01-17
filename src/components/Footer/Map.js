import React from 'react';

const Map = () => {
    return (
        <div>
            <iframe
                className='map'
                title='Embedded Map'
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=21.186389835586548%2C55.6779861422142%2C21.19714893722534%2C55.68100920402566&amp;layer=mapnik&amp;marker=55.67962968694164%2C21.191895386429965"
                style={{ border: '1px solid black' }}
            ></iframe>
        </div>
    );
};

export default Map;
