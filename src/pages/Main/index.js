import './style.css';
import BackgroundLogo from '../../components/BackgroundLogo';
import CardMemory from '../../components/CardMemory';
import cards from '../../cards';
import { useState } from 'react';
import Congrats from '../../assets/congrats.png'



function Main() {
  const [stateCard, setStateCard] = useState([...cards])

  return (
    <div className='container'>
      <BackgroundLogo setStateCard={setStateCard} cards={cards}/>
      <div className='container_cards'>
        {stateCard.length ?
        stateCard.map((item) => (
          <CardMemory key={item.id} item={item} stateCard={stateCard} setStateCard={setStateCard} />
        )):
        <img src={Congrats} alt='Parabens'/>
      
      }
      </div>
    </div>
  );
}

export default Main;
