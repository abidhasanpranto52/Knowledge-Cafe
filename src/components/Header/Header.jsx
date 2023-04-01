import React from 'react';

const Header = () => {
    return (
        <>
        <div  className='max-w-5xl mx-auto flex justify-between items-center px-3 pt-6 pb-4'>
            <h1 className='lg:text-3xl text-2xl font-bold'>Knowledge <span className='text-orange-500'>Cafe</span></h1>
            <img className='w-16 rounded-[50%]' src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?w=740&t=st=1680200650~exp=1680201250~hmac=df60315276e538e159a253b774c219e3e6cf5e074df60363e1b0bce3639fdd36" alt="" />
           
        </div>
        <hr className=' border'/>
        </>
    );
};

export default Header;