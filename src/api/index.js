import axios from 'axios';

// const ENDPOINT = 'http://193.176.87.163:8080';
const ENDPOINT = 'https://trafmintserver.herokuapp.com';
// const ENDPOINT = 'http://localhost:8080';

const api = {
    get: {
        isPrimeHolder: ({ userAddress }) => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/primeholder/?user=${userAddress}`,
            });
        },
        isPartnerHolder: ({ userAddress }) => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/partnerholder/?user=${userAddress}`,
            });
        },
        isGeneralHolder: ({ userAddress }) => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/generalholder/?user=${userAddress}`,
            });
        },
    },
};

export default api;
