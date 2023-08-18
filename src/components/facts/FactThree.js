import React from 'react';
import Races from './img/AllRacesBanner.png'

const FactThree = (props) => {
  return (
    <div className='Fact-three'>
    <h2>The Races of Tyria</h2>
      <img src={Races} alt='A banner featuring the five playable races' className='Races-banner'/>
      <p>The world of Tyria is widely populated by an alien race from another dimension, brought there by their gods. These are the Humans.</p>
      <p>Asuran society generally considers wider foreheads to be more attractive. This is likely due to thier focus on intellectual persuits, and wider foreheads might imply a larger brainspace.</p>
      <p>Charr have two sets of ears. Their upper ears are for catching higher frequency noises, and thier lower ears are for lower frequency noises. While they can hear well outside the ranges that humans can, they actually have a harder time hearing things that are in between.</p>
      <p>While Sylvari do, in fact, photosynthesize, they still require food and water like any animal does.</p>
      <p>While some Norn might imply that crossbreeding is possible with humans, it's been confirmed that none of the races, including humans and norn, can interbreed.</p>
    </div>
  );
};

export default FactThree;