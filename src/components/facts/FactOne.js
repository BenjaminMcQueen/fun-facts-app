import React from 'react';
import Rytlock from './img/Rytlock_02_concept_art.png';
import './css/facts.css';

const FactOne = (props) => {
  return (
    <div className='Fact-one'>
      <h2>Sohothin</h2>
      <img src={Rytlock} alt='Rytlock Brimstone weilding Sohothin' className='Rytlock' />
      <p>
        The flaming sword Rytlock weilds, named Sohothin, has quite a history behind it-- both in how Rytlock came to weild it, and how it came to be. While the sword itself was a gift from Balthazaar to protect Ascalon from invaders.
      </p>
      <p>
        Rytlock came into possession while on an undercover mission (unusual for the blood legion) in Flame Legion territory, after some of thier requisition teams managed to recover it from Abaddon's Mouth, a volcano that erupted and buried it and its former owner.
      </p>
      <p>
        Legend says that if it or its sister blade, Magdaer, return to the haunted remains of Ascalon City in the hands of the rightful king of ascalon, the ghost curse would be lifted. Rytlock had attempted to do this. It didn't work.
      </p>
      <p>
        Its skin and the skin of its sister blade, Magdaer, can be aquired by linking a Guild Wars 1 account with 10 achievement points and a (fairly pricy) Mystic Forge recipe.
      </p>
    </div>
  );
};

export default FactOne;