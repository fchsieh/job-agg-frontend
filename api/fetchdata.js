import { useState, useEffect } from "react";

const usePast7DaysData = (apiUrl) => {
    const [past7DaysData, setPast7DaysData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const currentDate = new Date();
            const past7DaysData = [];
            for (let i = 0; i < 7; i++) {
                const date = currentDate.toISOString().slice(0, 10);
                const response = await fetch(`${apiUrl}${date}`);
                const data = await response.json();
                past7DaysData.push(data["jobs"]);
                currentDate.setDate(currentDate.getDate() - 1);
            }
            setPast7DaysData(past7DaysData);
            setIsLoading(false);
        };
        fetchData();
    }, [apiUrl]);

    return { past7DaysData, isLoading };
};

export default usePast7DaysData;
