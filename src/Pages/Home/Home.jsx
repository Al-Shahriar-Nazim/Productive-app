import React from 'react';
import Bannar from '../../Components/Bannar/Bannar';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <Bannar data={data}></Bannar>
            
        </div>
    );
};

export default Home;