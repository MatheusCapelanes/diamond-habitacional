import { Divider } from '@mui/material'
import React from 'react'
import { newsDiamons } from '../../../mocks/newsMock'

const Noticias: React.FC = () => {
    return (
        <div className='flex flex-col'>
         <h1 className='text-2xl text-center m-4'>Acompanhe nossa evolução</h1>
         <Divider color="gray"/>
         <div>
                <h2 className='text-xl text-center m-4'>Notícias</h2>
                <div className='md:w-3/4 m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:flex-col'>
                    {newsDiamons.map((news, index) => (
                        <div key={index} className='bg-gray-200 p-4 rounded-lg m-4 flex flex-col'>
                            <h3 className='text-2xl'>{news.title}</h3>
                            <img src={news.image} alt={news.title} className='w-full my-4 rounded-md'/>
                            <p>{news.content}</p>
                        </div>
                    ))}
                </div>
         </div>
        </div>
    )
}

export default Noticias