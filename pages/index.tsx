import { NextPage,GetStaticProps } from 'next'
import React,{ useState } from 'react'

// component
import CharacterGrid from '../components/CharacterGrid'

interface Props {
    characters: object[]
}

const IndexPage: NextPage<Props> = ({ characters }) => {

    const [start, setStart] = useState(0)
    const [stop, setStop] = useState(5)

    const increase = () => {
        setStop(stop + 5)
        setStart(start + 5)
    }

    const decrease = () => {
        setStop(stop - 5)
        setStart(start - 5)
    }

    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-center'>
                <div className="block">
                    <h1 className='text-3xl font-semibold text-slate-900 text-center'>Rick and Morty</h1>
                    <p className=''>List of characters from the Rick and Morty</p>
                </div>
            </div>
            <div className="flex justify-center my-16">
                <CharacterGrid characters={characters} start={start} stop={stop}/>
            </div>
            <div className="flex justify-center space-x-16 text-center">
                {start > 0 
                    ? <button className={`p-2 border font-light`} onClick={decrease}>👈 Prev</button>
                    : ''
                }
                {stop == 1000  
                    ? ''
                    : <button className={`p-2 border font-light`} onClick={increase}>Next 👉</button>
                }
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const get = []
    for (let i = 1; i <= 826; i++) {
        get.push(i)
    }
    const res = await fetch(`https://rickandmortyapi.com/api/character/${get.join(',')}`)
    const characters = await res.json()
    return {
        props: {
            characters
        }
    }
}

export default IndexPage