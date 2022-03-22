const app = {
    init: () => {
        // for each, I select an id an put an event on it :
        const loadPeople = document.querySelector('#load-people');
        loadPeople.addEventListener('click', app.handleLoadPeopleClick);

        const loadPlanets = document.querySelector('#load-planets');
        loadPlanets.addEventListener('click', app.handleLoadPlanetsClick);

        const loadSpecies = document.querySelector('#load-species');
        loadSpecies.addEventListener('click', app.handleLoadSpeciesClick);

        const loadVehicles = document.querySelector('#load-vehicles');
        loadVehicles.addEventListener('click', app.handleLoadVehiclesClick);

        const loadStarships = document.querySelector('#load-starships');
        loadStarships.addEventListener('click', app.handleLoadStarshipsClick);
    },

    handleLoadPeopleClick: (e) => {
        const buttonLoadClicked = e.currentTarget;

        console.log(buttonLoadClicked);

        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch('https://swapi.dev/api/people/', fetchOptions);

        request.then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (jsonResponse) {
                    const peopleList = jsonResponse.results;
                    peopleTpl = '<ul>';
                    for (let people of peopleList) {
                        console.log(people.name);
                        peopleTpl += '<li>' + people.name + '</li>';
                    }
                    peopleTpl += '</ul>';

                    document.querySelector('#contentPeople').innerHTML = peopleTpl;
                }
            );
    },

    handleLoadPlanetsClick: (e) => {
        const buttonLoadClicked = e.currentTarget;

        console.log(buttonLoadClicked);

        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch('https://swapi.dev/api/planets/', fetchOptions);

        request.then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (jsonResponse) {
                    const planetsList = jsonResponse.results;
                    planetsTpl = '<ul>';
                    for (let planets of planetsList) {
                        console.log(planets.name);
                        planetsTpl += '<li>' + planets.name + '</li>';
                    }
                    planetsTpl += '</ul>';

                    document.querySelector('#contentPlanets').innerHTML = planetsTpl;
                }
            );
    },

    handleLoadSpeciesClick: (e) => {
        const buttonLoadClicked = e.currentTarget;

        console.log(buttonLoadClicked);

        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch('https://swapi.dev/api/species/', fetchOptions);

        request.then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (jsonResponse) {
                    const speciesList = jsonResponse.results;
                    speciesTpl = '<ul>';
                    for (let species of speciesList) {
                        console.log(species.name);
                        speciesTpl += '<li>' + species.name + '</li>';
                    }
                    speciesTpl += '</ul>';

                    document.querySelector('#contentSpecies').innerHTML = speciesTpl;
                }
            );
    },

    handleLoadVehiclesClick: (e) => {
        const buttonLoadClicked = e.currentTarget;

        console.log(buttonLoadClicked);

        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch('https://swapi.dev/api/vehicles/', fetchOptions);

        request.then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (jsonResponse) {
                    const vehiclesList = jsonResponse.results;
                    vehiclesTpl = '<ul>';
                    for (let vehicles of vehiclesList) {
                        console.log(vehicles.name);
                        vehiclesTpl += '<li>' + vehicles.name + '</li>';
                    }
                    vehiclesTpl += '</ul>';

                    document.querySelector('#contentVehicles').innerHTML = vehiclesTpl;
                }
            );
    },

    handleLoadStarshipsClick: (e) => {
        const buttonLoadClicked = e.currentTarget;

        console.log(buttonLoadClicked);

        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch('https://swapi.dev/api/starships/', fetchOptions);

        request.then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (jsonResponse) {
                    const starshipsList = jsonResponse.results;
                    starshipsTpl = '<ul>';
                    for (let starships of starshipsList) {
                        console.log(starships.name);
                        starshipsTpl += '<li>' + starships.name + '</li>';
                    }
                    starshipsTpl += '</ul>';

                    document.querySelector('#contentStarships').innerHTML = starshipsTpl;
                }
            );
    }
}

document.addEventListener('DOMContentLoaded', app.init);