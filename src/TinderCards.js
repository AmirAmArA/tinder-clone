import React, { useState ,useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from './axios';

function TinderCards() {
  const [people, setPeople] = useState([]);
   
    useEffect(() => {
      async function fetchData() {
        const req = await axios.get("/tinder/cards");

        setPeople(req.data);
      }

      fetchData();
    }, []);

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
              style={{backgroundImage: `url(${person.imgUrl})`}}
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
