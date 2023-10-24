import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, SetErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('term searched');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',

                }
            });
            setResults(response.data.businesses);
        }
        catch (err) {
            SetErrorMessage('Something went wrong!!!');
        }
    };

        useEffect(() => {
            searchApi('pasta')

        }, []);
    
    return [searchApi, results, errorMessage];

};


