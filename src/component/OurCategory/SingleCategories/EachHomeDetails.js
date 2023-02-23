import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EachHomeDetails = () => {


    // const params = useParams();

    const details = useLoaderData();
    console.log(details);



    // const { data: details = [] } = useQuery({
    //     queryKey: ["details"],
    //     queryFn: async () => {
    //       const res = await fetch(`http://localhost:5000/homedetails/${params.id}`);
    //       const data = await res.json();
    //       return data;
    //     },
    //   });

     ;

    return (
        <div className='container mx-auto'>

<h1>hiii</h1>
            {/* {
                details.map(detail => <h1>
                    {detail.location}
                </h1> )
            } */}
            
        </div>
    );
};

export default EachHomeDetails;