import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useApi(apiFunc) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});

    async function request({
        successMsg = '',
        isShowSuccessMsg = false,
        errorMsg = 'Something wrong',
        isShowErrorMsg = true,
        formData = {}
    }) {
        setIsLoading(true);
        try {
            const { data } = await apiFunc(formData);
            setData(data);
            setIsLoading(false);
            setIsError(false);

            if (isShowSuccessMsg) toast.success(successMsg);
        } catch (err) {
            const { response } = err;
            setError(response);
            setIsLoading(false);
            setIsError(true);

            console.log(response);
            if (isShowErrorMsg) toast.error("Error Status " + response.status + " " + errorMsg);
        }
    }

    return { isLoading, isError, data, error, request };
}