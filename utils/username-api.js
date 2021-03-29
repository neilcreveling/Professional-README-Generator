// external package (axios)

const axios = require('axios');

// calls Github to get user info

const usernameAPI = {
    async getUser(userResponse) {
        try {let response = await axios
        .get(`https://api.github.com/users/${userResponse.Github}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
};

module.exports = usernameAPI;