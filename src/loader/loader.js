import axios from 'axios';

const BREEDS_LIST_URL = "https://dog.ceo/api/breeds/list/all";
const BREED_RANDOM_DOG_URL = "https://dog.ceo/api/breed/${BREED}/images/random";

export async function fetchBreedsList() {
    try {
        const response = await axios.get(BREEDS_LIST_URL);
        const breeds = response.data.message;
        const breedsList = Object.keys(breeds);
        return breedsList;
    } catch (e) {
        throw new Error("Can't fetch breeds list");
    }
}

export async function fetchBreedDog(breed) {
    try {
        const url = BREED_RANDOM_DOG_URL.replace("${BREED}", breed);
        const response = await axios.get(url);
        return response.data.message;
    } catch (e) {
        throw new Error(`Can't fetch random dog from ${breed} breed`);
    }
}