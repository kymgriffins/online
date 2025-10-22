import TypingEffect from '../components/TypingEffect';

function ArticleCard(props) {
    const { imgPath, title, description } = props.data;
    const { onClick } = props;

    return (
        <section className='mb-3 display-card cursor-pointer' onClick={onClick} tabIndex={0} style={{ outline: 'none' }}>
            <div className='row card-row'>
                <div className='col-12 col-md-4'>
                    <img
                        className='display-img'
                        src={imgPath}
                        alt="Article cover image"
                    />
                </div>
                <div className='col-12 col-md-8'>
                    <TypingEffect tag="h3" typingSpeed={30}>
                        {title}
                    </TypingEffect>
                    <p>
                        {description}
                    </p>
                    <span className='link text-large'>
                        <i className="bi bi-journal-text"></i> Read blog
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ArticleCard;