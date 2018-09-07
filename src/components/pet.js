import React from 'react'

const Pet = ({ pet, onAdoptPet, species }) => {
  if (pet !== null) {
    return (
      <section>
        <header>
          <h2>{pet.name}</h2>
          <img src={pet.imageURL} alt={pet.imageDescription} />
        </header>
        <h3>More about {pet.name}</h3>
        <dl>
          <dt>Sex:</dt>
          <dd>{pet.sex}</dd>
          <dt>Age:</dt>
          <dd>{pet.age}</dd>
          <dt>Breed:</dt>
          <dd>{pet.breed}</dd>
          <dt>Story:</dt>
          <dd>{pet.story}</dd>
        </dl>
        <button onClick={() => onAdoptPet(species)}>Adopt</button>
      </section>
    )
  } else {
    return <section />
  }
}

export default Pet;