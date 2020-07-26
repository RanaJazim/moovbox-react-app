import { useState } from 'react';

export default function useApi(apiFunc) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});

    async function request() {
        try {
            setIsLoading(true);
            const { data } = await apiFunc();
            setData(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err.response);
            setError(err.response);
            setIsLoading(false);
        }
    }

    return { isLoading, data, error, request };
}