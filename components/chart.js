import React, { useEffect } from 'react'
import { exp } from 'react-native-reanimated';

const Chart = () => {
    useEffect(() => {
        const fetchStockData = async () => {
            const result = await getDailyChart('TSLA');
            console.log(result.data);
        }

        fetchStockData();
    })
};

export default Chart;