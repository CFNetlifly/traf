import axios from 'axios';

// const ENDPOINT = 'http://193.176.87.163:8080';
const ENDPOINT = 'http://localhost:8080';

const api = {
    get: {
        isPrimeHolder: ({ userAddress }) => {
            axios({
                method: 'get',
                url: `${ENDPOINT}/primeholder/?user=${userAddress}`,
            });
        },
        isPartnerHolder: ({ userAddress }) => {
            axios({
                method: 'get',
                url: `${ENDPOINT}/partnerholder/?user=${userAddress}`,
            });
        },
        isGeneralHolder: ({ userAddress }) => {
            axios({
                method: 'get',
                url: `${ENDPOINT}/generalholder/?user=${userAddress}`,
            });
        },
    },
};

export default api;
