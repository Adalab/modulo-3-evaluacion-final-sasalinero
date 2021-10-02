
const callToApi = () => {

    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
        .then(response => response.json())
        .then(response => {

            const allData = response.results.map((character) => {

                return {
                    idDelBicho: character.id,
                    nombreDelBicho: character.name,
                    fotoDelBicho: character.image,
                    especieDelBicho: character.species,
                    planetaDelBicho: character.origin.name,
                    episodiosDelBicho: character.episode.length,
                    estadoDelBicho: character.status,



                }

            });


            return allData;
        });
};

export default callToApi;