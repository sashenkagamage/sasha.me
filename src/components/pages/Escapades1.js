import React from 'react'
import PropTypes from 'prop-types'
import './project.css'
import Footer from '../Footer'
import CardsCmb from './CardsCmb';

const CAMBRIDGE_CONTENT = {
    title: "POV: It's Summer'23 and you're in Cambridge",
    paragraphs: [
        {
            text: 'Living at ',
            link: {
                url: 'https://www.girton.cam.ac.uk/',
                text: 'Girton College, University of Cambridge'
            },
            continuation: ' was like being in a cozy suburban community, surrounded by lush greenery, beautiful flowers, and even apple orchards. It was such a refreshing change from the hustle and bustle of university life in Hong Kong.'
        },
        'Walking down the Orchard, picking rusty red apples, celebrating at Social Hub with a mint choc frappe, and punting on the river cam while humming country songs – things that you would imagine to happen in an old English film.',
        'I had to complete three modules including Quantum Technologies, Jet Engines, and Nanotechnology. The classes started with Jet Engines, taught by Dr Teng Cao, a lecturer at Imperial College of London.',
        'Also, got a chance to see the Whittle Lab, the birthplace of modern jet engines, and moved to Nanotechnology which was taught by Professor Hannah Joyce.',
        'The last adventure was Quantum Technologies with Professor Christopher Ford. He helped us navigate the mysteries of quantum mechanics, shedding light on the differences between quantum and classical theories. It all wrapped up with intriguing individual presentations.'
    ]
};

function Escapades1(){
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);

    const handleImageLoad = () => setImageLoaded(true);
    const handleImageError = () => setImageError(true);

    return(
        <>
        <main className="container">
            <article className="content">
                <section className="escapades">
                    <div>
                        <header className="escapades__header">
                            <h1>{CAMBRIDGE_CONTENT.title}</h1>
                        </header>
                        <div className="escapades__content">
                            {CAMBRIDGE_CONTENT.paragraphs.map((paragraph, index) => (
                                <p key={index} className="escapades__paragraph">
                                    {typeof paragraph === 'string' ? (
                                        paragraph
                                    ) : (
                                        <>
                                            {paragraph.text}
                                            <a
                                                href={paragraph.link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="escapades__link"
                                            >
                                                {paragraph.link.text}
                                            </a>
                                            {paragraph.continuation}
                                        </>
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="escapades__image-container">
                        {!imageLoaded && !imageError && (
                            <div className="escapades__image-loading">Loading...</div>
                        )}
                        {imageError && (
                            <div className="escapades__image-error">
                                Failed to load image
                            </div>
                        )}
                        <img
                            src="/image-cmb.jpeg"
                            className={`escapades__image ${imageLoaded ? 'escapades__image--loaded' : ''}`}
                            alt="Cambridge University campus view"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    </div>
                </section>
            </article>
        </main>

        <CardsCmb/>
     
        <Footer/>
        </>
    )
}

Escapades1.propTypes = {
    // Add props here if needed in the future
};

export default Escapades1;
