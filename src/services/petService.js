const url = 'http://localhost:5000/pets';


export const getAll = (category = '') => {
    let petsUrl = url;

    if (category) {
        let firstLetter = category[0].toUpperCase();
        let nextLetters = category.slice(1, category.length - 1);

        let queryCategory = firstLetter + nextLetters;

        petsUrl += ((category && category !== 'all') ? `?category=${queryCategory}` : '');
    }

    // console.log(petsUrl);

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
}



export const getOne = (petId) => {

    return fetch(url + `/${petId}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}



export const create = (name, description, imageURL, category) => {
    let pet = {
        name,
        description,
        imageURL,
        category,
        likes: 0
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
};



export const update = (petId, pet) => {
    return fetch(`${url}/${petId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
};


export const updateLikes = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes })
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const pet = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes })
    })
    .then((res) => res.json())
    .catch(err => console.log(err));
}
 
export const deletePet = (petId) => {
    return fetch(`${url}/${petId}`, {
        method: 'DELETE'
    });
}