import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCategories = () => {

    const data = useLoaderData();
    console.log(data);

    const {data: allCategory , isLoading } = useQuery({
        queryKey: ["allCategory"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allbasa`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1>single Categories</h1>
        </div>
    );
};

export default SingleCategories;