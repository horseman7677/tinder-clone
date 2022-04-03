import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "rahul",
            url: "",
        },
        {
            name: "kumar",
            url: "",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('remove' + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    }
    return (
        <div className="tinderCard">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards