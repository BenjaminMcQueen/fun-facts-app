import React from 'react';
import Mesmer from './img/Mesmer_04_concept_art_(wide).png';

const FactTwo = (props) => {
  return (
    <div className='Fact-two'>
      <h2>Skills and abilities</h2>
      <img src={Mesmer} alt='A mesmer' className='Mesmer-image' />
      <p>Several of the Mesmer's skills sample a music box playing the Guild Wars 2 theme backwards. The Portal Entre ability plays this in its entirety.</p>
      <p>If three or more Rangers use the Warhorn ability, "Call of the Wild", simultaniously, a Lunar Wolf is summoned. It doesn't do anything, and is purely cosmetic. </p>
      <p>The scepter skill for thief, "Twilight Combo", can be animation cancelled, leaving only a slow moving projectile without the effect of the second shot.</p>
      <p>As of Secrets of the Obscure's weapon update, Sword is the only weapon that can be used by every class in the game. The second most usable weapon is staff, being only unusable be Engineer. The least usable weapon is the Longbow, only able to be used by the Warrior, Ranger, and Guardian (which previously required the Dragon Hunter Elite Specialization)</p>
      <p>Likewise, the class able to use the most weapons is warrior, at 15 distinct weapon types (including underwater weapons). Engineer has the least access to weapons, at only 7 (also including underwater weapons).</p>
    </div>
  );
};

export default FactTwo;