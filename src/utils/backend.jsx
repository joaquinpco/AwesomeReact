import axios from 'axios';
const dotenv = require('dotenv');

export default class Backend
{
    constructor()
    {
        dotenv.config();
    }

    getBackendUrl()
    {
        // return process.env.REACT_APP_BACKEND_URL;
        return 'http://localhost:3000/api/v1';
    }

    async get(endpoint)
    {
        try
        {
            return await axios.get(this.getBackendUrl() + endpoint);
        } catch(err)
        {
            return err;
        }
    }

    async post(endpoint, data)
    {
        try
        {
            return await axios.post(this.getBackendUrl() + endpoint, data);
        } catch(err)
        {
            return err;
        }
    }

    async put(endpoint, data)
    {
        try
        {
            return await axios.put(this.getBackendUrl() + endpoint, data);
        } catch(err)
        {
            return err;
        }
    }

    async delete(endpoint)
    {
        try
        {
            return await axios.delete(this.getBackendUrl() + endpoint);
        } catch(err)
        {
            return err;
        }
    }
}