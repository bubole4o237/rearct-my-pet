import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as petsService from '../../services/petService';

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({});
    let [likes, setLike] = useState(0);
    

    useEffect(() => {
        petsService.getOne(match.params.petId)
        .then(res => {setLike(Number(res.likes)); setPet(res);});
    }, [match]);

    

    // const petPet = () => {
    //     return useEffect(() => {
    //         setLike(pet.likes + 1);
    //     }, []);
    // }
console.log(likes);
    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <Link to="#"><button className="button" onClick={() => setLike(likes + 1)}><i className="fas fa-heart"></i>
                        Pet</button></Link>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
        </section>
    );
}

export default PetDetails;
