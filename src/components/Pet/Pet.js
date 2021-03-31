import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as petsService from '../../services/petService';

const Pet = ({
    id,
    /*name,
    category,
    imageURL,
    description,
    likes,
    match,
    history,
    location*/
}) => {

    let [pet, setPet] = useState({});
    // let [actualLike, setActualLike] = useState(likes);

    useEffect(() => {
        petsService.getOne(id)
            .then(res => {
                setPet(res);
            });
    }, [pet.likes]);


    const onClickPetButtonHandler = () => {
        let updatedLikes = Number(pet.likes) + 1;
        petsService.pet(id, updatedLikes)
            .then((res) => setPet(res));
    }


    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL} />
            </p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to="#"><button className="button" onClick={onClickPetButtonHandler}><i className="fas fa-heart"></i> Pet</button></Link>
                <Link to={`/pet/details/${id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span> {pet.likes}</span>
            </div>
        </li>
    );
    
}

export default Pet;
