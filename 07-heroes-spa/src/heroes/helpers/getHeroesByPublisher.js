import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no válida`);
    }


    return heroes.filter(hero => hero.publisher === publisher); //filtra dependiendo del publisher que se le pase

}