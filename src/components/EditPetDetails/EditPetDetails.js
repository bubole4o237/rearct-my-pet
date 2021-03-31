import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';

import InputError from '../Shared/InputError/InputError';

const EditPetDetails = ({ match, history }) => {

    const [pet, setPet] = useState({});

    const [errorMessage, setErrorMessage] = useState('');

    const petId = match.params.petId

    useEffect(() => {
        petService.getOne(petId)
            // .then((res) => res.json())
            .then((res) => setPet(res))
    }, []);

    const onSaveDescriptionHandler = (e) => {
        e.preventDefault();
        console.log(e.target.description.value);
        const description = e.target.description.value;
        
        let updatedPet = {...pet, description}

        petService.update(petId, updatedPet)
        .then(() => history.push(`/pet/details/${petId}`));
    }


    const onDescriptionChangeHandler = (e) => {
        console.log(e.target.value);

        if (e.target.value.length < 10) {
            setErrorMessage('Description is too short');
        } else {
            setErrorMessage('');
        }
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
            <p className="img"><img src={pet.imageURL} />
            </p>
            <form onSubmit={onSaveDescriptionHandler}>
                <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
                
                <InputError>{errorMessage}</InputError>
                
                <button className="button" type="submit"> Save</button>
            </form>
        </section>
    );
}

export default EditPetDetails;
