import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './IndividualUserDetail.css'

const IndividualUserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div class="card w-100 bg-base-100 shadow-xl mx-auto mt-1 main-div">
            <div class="card-body">
                <h2 class="card-title text-4xl name">Name: <span className='text-style'>{user.name}</span></h2>
                <p className="steps"><span className='title'>Username: <span className='text-style'>{user.username}</span></span></p>
                <p className="steps"><span className='title'>Email: <span className='text-style'>{user.email}</span></span></p>
                <p className="steps"><span className='title'>Address:</span></p>
                <li className='title-two'>City: <span className='text-style'>{user.address?.city}</span></li>
                <li className='title-two'>Street: <span className='text-style'>{user.address?.street}</span></li>
                <li className='title-two'>Zipcode: <span className='text-style'>{user.address?.zipcode}</span></li>
                <p className="steps"><span className='title'>Phone: <span className='text-style'>{user.phone}</span></span></p>
                <p className="steps"><span className='title'>Website: <span className='text-style'>{user.website}</span></span></p>
            </div>
        </div>
    );
};

export default IndividualUserDetail;