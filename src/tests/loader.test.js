const { fetchBreedsList, fetchBreedDog } = require ("../loader/loader");

test('fetches breeds list', async () => {
    const breedsList = await fetchBreedsList();
    expect(breedsList).toBeInstanceOf(Array);
});

test('fetches random dog from given breed', async () => {
    const BREED = "basenji";
    const imageUrl = await fetchBreedDog(BREED);
    expect(imageUrl).toContain(BREED);
});