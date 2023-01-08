import { useState, useEffect } from "react";

const FetchApiData = (apiUrl) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setData(data["jobs"]);
            } catch (error) {
                setError(error);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [apiUrl]);

    return { data, isLoading, error };
};

const GetDataByDate = (date) => {
    const apiUrl = "http://192.168.0.22:8888/jobs/" + date;
    const { data, isLoading, error } = FetchApiData(apiUrl);

    return { data, isLoading, error };
};

export default GetDataByDate;
