import React, { useContext, useState } from 'react';
import { CountContext } from '../../App';
import Modal from '../Modal/Modal';

const Gun = ({gun}) => {
    const [modalData,setModalData]=useState({});
    const {name,img,bullet}=gun;
    const [count,setCount]=useContext(CountContext);

    const handleCountBtn=()=>{
        setCount(count+1);
    }

    return (
        <div>
           <div className="card bg-base-100 shadow-xl border mb-2">
            <figure><img className='w-full h-64' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start mt-4">
                <button onClick={handleCountBtn} className="btn btn-sm">Add To Cart</button>
                <label onClick={()=>setModalData(gun)} htmlFor="my-modal-3" className="btn btn-sm btn-primary">Details</label>
                </div>
            </div>
            </div>
            {
             modalData && <Modal 
             key={modalData.id} 
             data={modalData}
             setModalData={setModalData}
             ></Modal>
            }
        </div>
    );
};

export default Gun;