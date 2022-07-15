import './style.css'
import CardBack from '../../assets/card-back.png'

function CardMemory({ item, stateCard, setStateCard }) {

    function handleTurnCard() { 
        const arrayCards = [...stateCard];
        const currentCard = arrayCards.find((element) => element.id === item.id)
        const firstCard = arrayCards.filter((element) => element.turned)
        if(firstCard.length > 1) {
            return;
        }

        if(firstCard.length && item.slug === firstCard[0].slug) {
            currentCard.turned = !currentCard.turned
            setStateCard(arrayCards)

            setTimeout(() => {
                if(currentCard.id === firstCard[0].id){
                    return;
                }
    
                const filterCards = arrayCards.filter((element) => element.id !==currentCard.id && element.id !== firstCard[0].id);
    
                setStateCard(filterCards)
            }, 800);
           

            return;
        }


        currentCard.turned = !currentCard.turned
        setStateCard(arrayCards)

        if(firstCard.length > 0) {

            setTimeout(() => {
                arrayCards.forEach((element) => {
                    element.turned = false;
                });
                setStateCard([...arrayCards]);
            }, 1000)
            
        }
    }

    return (
    <img className='cards' src={item.turned ? item.image : CardBack} alt='Card' onClick={() => handleTurnCard()}/> )
}

export default CardMemory