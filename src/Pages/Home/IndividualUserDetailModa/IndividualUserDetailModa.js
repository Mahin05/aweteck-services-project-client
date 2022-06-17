import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IndividualUserDetailModa = ({detail}) => {
    const {name,username,email,address,phone,website} = detail;
    return (
        <div>
            <input type="checkbox" id="user-info-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="user-info-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 class="card-title text-4xl name">Username: <span className='text-style'>{username}</span></h2>
                    <p className="steps"><span className='title'>Name: <span className='text-style'>{name}</span></span></p>
                    <p className="steps"><span className='title'>Email: <span className='text-style'>{email}</span></span></p>
                    <p className="steps"><span className='title'>Address:</span></p>
                    <li className='title-two'>City: <span className='text-style'>{address?.city}</span></li>
                    <li className='title-two'>Street: <span className='text-style'>{address?.street}</span></li>
                    <li className='title-two'>Zipcode: <span className='text-style'>{address?.zipcode}</span></li>
                    <p className="steps"><span className='title'>Phone: <span className='text-style'>{phone}</span></span></p>
                    <p className="steps"><span className='title'>Website: <span className='text-style'>{website}</span></span></p>
                </div>
            </div>
        </div>
    );
};

export default IndividualUserDetailModa;