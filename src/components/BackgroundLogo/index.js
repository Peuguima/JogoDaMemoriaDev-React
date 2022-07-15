import './style.css';
import Logo from '../../assets/logo.svg'

function BackgroundLogo({setStateCard, cards}) {

    function handleReset() {
        cards.forEach((item) => {
            item.turned = false;
        })
        setStateCard(cards);
    }

    return (
        <div className='background_logo'>
            <img src={Logo} alt='logo'/>
            <button onClick={() => handleReset()}>RESET</button>
        </div>
    )
}

export default BackgroundLogo;