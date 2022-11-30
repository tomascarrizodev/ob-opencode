// import axios from 'axios';

const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            poke: ''
        }
    },
    computed: {
        calling: () => {
            // axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            //     .then(function (response) {
            //         // handle success
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //     })
            //     .finally(function () {
            //         // always executed
            //     });
            fetch('https://pokeapi.co/api/v2/pokemon')
                .then(data => data.json())
                .then(data => {
                    console.log(data.results);
                })
                .catch(e => console.log(e))
        }
    },
    methods: {

    }
}).mount('#app')