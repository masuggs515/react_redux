import './Meme.css'

const Meme = ({ img, topText, bottomText, deleteMeme}) => {
    return (
        <div className='Meme' style={{ 
            background: `url(${img})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' }}>
            <button onClick={deleteMeme}>X</button>
            <p>{topText}</p>
            <p>{bottomText}</p>
        </div>
    )
};

export default Meme;