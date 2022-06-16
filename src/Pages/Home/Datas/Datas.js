import React, { useEffect, useState } from 'react';

const Datas = () => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h2>{datas.length}</h2>
        </div>
    );
};

export default Datas;