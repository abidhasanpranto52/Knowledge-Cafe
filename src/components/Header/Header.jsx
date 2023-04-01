import React from 'react';

const Header = () => {
    return (
        <>
        <div  className='max-w-5xl mx-auto flex justify-between items-center px-3 pt-6 pb-4'>
            <h1 className='lg:text-3xl text-2xl font-bold'>Knowledge <span className='text-orange-500'>Cafe</span></h1>
            <img className='w-16 rounded-[50%]' src="https://img.freepik.com/free-photo/hooded-computer-hacker-stealing-information-with-laptop_155003-1918.jpg?w=1380&t=st=1680355540~exp=1680356140~hmac=88b708ef33bbe177180372617ca86e539b3070079404cad0ef321501ab0c03ba" alt="" />
           
        </div>
        <hr className=' border'/>
        </>
    );
};

export default Header;