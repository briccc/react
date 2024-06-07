import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  

  return (
    <ul>
        {
            heroes.map(hero => (
            <li key={hero.id}>
                Nombre: { hero.superhero } <br />
                Alter Ego: { hero.alter_ego } <br />
                Primera aparición: { hero.first_appearance } <br />
                Personajes: { hero.characters } <br />
                <br />
            </li>
            ))
        }
    </ul>
  );
};
