import React, { useState } from 'react'
import UserCard  from './UserCard';
export default function Main(){
    const [month,setMonth] = useState('May')
    return (
        <>
            <div className='w-full h-full overflow-auto bg-orange-100'>
            <div class='flex items-center justify-center bg-orange-300'>
    <div class='w-full mx-auto bg-orange-100  shadow-xl'>
        <div class='max-w-md mx-auto space-y-6 flex item-center justify-center p-5 text-xl'>
            {month}
        </div>
    </div>
</div>      <div className='overflow-hidden'>
    <UserCard/>




</div>
            </div>
            

        </>
    );
}
