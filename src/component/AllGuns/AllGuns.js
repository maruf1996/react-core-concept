import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const AllGuns = () => {
    const [guns,setGuns]=useState([]);

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=>res.json())
        .then(data=>setGuns(data.slice(0,12)));
    },[])
    return (
        <div>
            <div className="mt-6">
            <h2 className='text-5xl text-center font-bold mt-4'>Welcome to <span className='text-red-600 text-block lg:text-inline '>Gun Store</span></h2>
            <p className='text-center mx-3 lg:w-3/6 lg:mx-auto mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perferendis corrupti cumque, aliquam dignissimos totam. Nam deserunt harum molestias quidem velit molestiae eligendi, eum consequatur?</p>
            </div>

            <div className="grid lg:grid-cols-3 my-8 mx-4 gap-4 lg:gap-8 lg:w-11/12 lg:mx-auto">
            {
                guns.map(gun=><Gun
                key={gun.id}
                gun={gun}
                ></Gun>)
            }
            </div>
        </div>
    );
};

export default AllGuns;