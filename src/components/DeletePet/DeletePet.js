import * as petsService from '../../services/petService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeletePet = ({ match }) => {

    const [pet, setPet] = useState({});

    const petId = match.params.petId;

    useEffect(() => {
        petsService.getOne(petId)
            .then((res) => setPet(res));
    }, []);
    // console.log(pet);

    const onClickDeleteButtonHandler = () => {
        petsService.deletePet(petId)
            .then(() => { console.log('The pet was deleted!');});
    }

    return (
        <section className="deletePet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <h2>Do you really want to delete this pet?</h2>
            <div className="pet-info">
                <Link to={`/pet/details/${pet.id}`}><button className="button">Cancel</button></Link>
                <Link to="/"><button className="button" onClick={onClickDeleteButtonHandler}>Delete</button></Link>
            </div>ƒ
        </section>
    );
}

export default DeletePet;
