import React from 'react'
import Image from 'next/image'

interface Props {
    characters: any
    start: number
    stop: number
}

const CharacterGrid: React.FunctionComponent<Props> = ({ characters,start,stop }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {characters.slice(start, stop).map(({id,name,image,status,species,gender,location}: any) => (
                <div className='border rounded-md w-full shadow-md bg-white max-w-full' key={id}>
                    <Image src={image} width={'400px'} height={'300px'}/>
                    <div className='block p-2'>
                        <h1 className='font-semibold truncate text-slate-900'>{name}</h1>
                        <h3><span className={`${status === 'Alive' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`}>{status}</span> - {species}</h3>
                        <div className="mt-2">
                            <h3 className='text-slate-700 text-base'>Gender :</h3>
                            <h3>{gender}</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className='text-slate-700 text-base'>Last known location :</h3>
                            <h3>{location?.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CharacterGrid