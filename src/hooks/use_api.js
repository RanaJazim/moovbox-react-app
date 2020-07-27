import { useState } from 'react';

export default function useApi(apiFunc) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});

    async function request(...props) {
        setIsLoading(true);
        try {
            const { data } = await apiFunc(...props);
            setData(data);
            setIsLoading(false);
            setIsError(false);
        } catch (err) {
            // console.log(err.response);
            setError(err.response);
            setIsLoading(false);
            setIsError(true);
        }
    }

    return { isLoading, isError, data, error, request };
}