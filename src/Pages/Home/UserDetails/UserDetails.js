import React, { useEffect, useState } from 'react';
import UserDetail from '../UserDetail/UserDetail';
import './UserDetails.css'

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUserDetails(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <h2 className="text-3xl text-center mb-4 title-style">USERS INFO</h2>
            <div>
                {/* {
                    dataSearch.length === 0 ? <Loading></Loading> : ''
                } */}
                <div className="recipes-container">
                    {
                        userDetails.map(userDetail => <UserDetail
                            key={userDetail._id}
                            userDetail={userDetail}
                        ></UserDetail>)
                    }
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default UserDetails;