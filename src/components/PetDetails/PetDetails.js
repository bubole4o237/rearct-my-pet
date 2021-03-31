import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as petsService from '../../services/petService';
// import DeletePet from '../DeletePet/DeletePet';


const PetDetails = ({ props, match }) => {

    let [pet, setPet] = useState({});
    // let [likes, setLike] = useState(0);

    let petId = match.params.petId;

    useEffect(() => {
        petsService.getOne(petId)
            .then(res => {
                setPet(res);
            });
    }, [match, pet.likes]);

    // let changedLikes = 0;

    const onPetButtonClickHandler = () => {
        let updatedLikes = Number(pet.likes) + 1;
        petsService.pet(petId, updatedLikes)
            .then((res) => setPet(res));
        ////////////
        /*
        petsService.getOne(petId)
            .then(res => {
                setPet(res);
                console.log(res);
                console.log(pet);
                changedLikes = Number(res.likes) + 1;
                console.log(changedLikes);
            })
            .then(() => {
                // changedLikes += 1;
                // console.log(changedLikes);
                petsService.updateLikes(pet.id, changedLikes)
                    .then((res) => {
                        setPet(res);
                        console.log(res);
                        console.log(pet);
                        console.log(changedLikes);

                    })
                    .then(() => console.log(pet));
            })
            */
    }

    return (
        <section className="detailsOtherPet" animals="many">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <Link to={`/pet/details/${pet.id}`}><button className="button" onClick={onPetButtonClickHandler}><i className="fas fa-heart"></i>
                        Pet</button></Link>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/`}><button className="button">Back</button></Link>
                <Link to={`/pet/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <Link to={`/pet/${pet.id}/delete`}><button className="button">Delete</button></Link>
            </div>
        </section>
    );
}

export default PetDetails;
