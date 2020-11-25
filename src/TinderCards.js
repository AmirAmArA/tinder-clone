import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455'
    }
  ]);

  const swiped = (direction, deletedName) => {
    console.log(`You Removed ${deletedName} to the ${direction}`);
  }

  const outOfFrame = (personName) => {
    console.log(`${personName} left the screen`)
  }


  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage: `url(${person.url})`}}
              className="card"
            >
              <h3>{person.name}</h3>

            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;
