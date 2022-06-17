import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDetail.css'

const UserDetail = ({userDetail,setDetail}) => {
    const {id,name,username,email,address,phone,website} = userDetail;
    // const navigate = useNavigate();
    // const navigateToRecipeDetail = id => {
    //     navigate(`/details/${id}`);
    // }
    return (
        <div class="card w-50 bg-base-100 mx-5 my-5 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title name-title">{username}</h2>
                <h2 class="card-title email-title">{email}</h2>
                <div class="card-actions">
                <label onClick={()=>setDetail(userDetail)}  for="user-info-modal" class="btn btn-ghost mt-3 seemore">See more user details...</label> 
                </div>
            </div>
        </div>
    );
};

export default UserDetail;