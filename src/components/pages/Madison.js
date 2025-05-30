import React from 'react'
import PropTypes from 'prop-types'
import './project.css'
import Footer from '../Footer'
import CardsMad from './CardsMad';

const MADISON_CONTENT = {
    title: "Study Abroad: Spring'25 in Madison",
    paragraphs: [
        {
            text: 'Spending a semester at ',
            link: {
                url: 'https://www.wisc.edu/',
                text: 'the University of Wisconsin–Madison'
            },
            continuation: ' was more than just ticking off courses on a transcript. It was about frozen lakes, rolling on the snow, late-night wine and cheese study sessions, and convos that stretched across cultures and time zones.'
        },
        "I took courses that are related to my major, and I absolutely loved learning in the new environment. The course I was most excited about was \"Intro to Robotics.\" I had fun learning novel concepts in the class and implementing them in real-world mobile robots and robotic arms.",
        "Robotics never fails to excite me, and my curiosity led me to join one of the projects that my robotics professor, Dr. Adamczyk, has been doing for a couple of years. The project is called \"Weeblebot,\" a robot that features flat wheels, enabling it to achieve self-balancing capability without requiring external power (unlike Segways). I had the privilege to work on autonomous navigation for Weeblebot using ROS2 and Nav2. (I have listed the projects I did inside and outside the class in my project section.)",
        "Madison was a mix of quiet study spots and loud Badger pride, of bitter cold days with some warm days here and there. Even though starting everything from scratch again in the US seemed intimidating, it taught me that the best experiences in our lives always come with some sacrifices for change.",
        "I met amazing people from different parts of the world—from spontaneous board game nights in the college library to road trips with people I met just weeks earlier. From campfires in the middle of the night to failed push-up challenges, not only made our friendships stronger but also gave us memories we could reminisce over the years ahead. These experiences made me feel like I had discovered new versions of myself.",
        "Last but not least, I want to thank my friends, professors and seniors from Hong Kong for helping and replying to all my midnight texts/emails. My parents are the most supportive human beings I've seen, so every achievement on my way is a result of their hard work."
    ]
};

function Madison() {
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
                            <h1>{MADISON_CONTENT.title}</h1>
                        </header>
                        <div className="escapades__content">
                            {MADISON_CONTENT.paragraphs.map((paragraph, index) => (
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
                            src="/image-madison-main.png"
                            className={`escapades__image ${imageLoaded ? 'escapades__image--loaded' : ''}`}
                            alt="University of Wisconsin-Madison campus view"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    </div>
                </section>
            </article>
        </main>

        <CardsMad/>
        <Footer/>
        </>
    )
}

Madison.propTypes = {
    // Add props here if needed in the future
};

export default Madison;