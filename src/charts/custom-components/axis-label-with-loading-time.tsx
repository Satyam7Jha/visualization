import React, { useState, useEffect } from 'react';

export const AxisLabelWithLoadingTime = ({ tick }: { tick: any }): JSX.Element => {
    const [value, setValue] = useState<string | number | null>(null);

    useEffect(() => {
        const delay = Math.floor(Math.random() * 10000) + 1000;
        const timer = setTimeout(() => {
            const tickValue = tick?.axis?.names?.[tick.pos] ?? tick?.axis.categories?.[tick.pos] ?? tick?.pos;
            setValue(tickValue);
        }, delay);

        return () => clearTimeout(timer);
    }, [tick]);

    if (value === null) {
        return <div>Loading...</div>;
    }

    return <div>{value}</div>;
};
