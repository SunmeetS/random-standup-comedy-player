import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import ReactPlayer from 'react-player'

export const RandomStandupComedy = () => {

    let [links, setLinks] = useState([])
    let [id, setId] = useState(Math.floor(Math.random() * 40));
    let [prev, setPrev] = useState([id])
    let [prevIndex, setPrevIndex] = useState()

    useEffect(() => {
        try {
            axios.get('https://express-server-production-dd8e.up.railway.app/getLatestLinks').then((res) => {
                setLinks(res.data)
            });
        } catch (err) {
            console.log()
        }
    }, [])

    return (
        <div className='mainDiv'>
            <div className='videoPlayer'>

                <h2 className='heading'>✨ Random Standup Comedy Player ✨</h2>
                <div className="player-wrapper">
                    <ReactPlayer
                        playsInline={true}
                        className='react-player'
                        playing={true}
                        controls={true}
                        volume={0.75}
                        pip={true} url={links[id]?.url}
                    />
                </div>
                <div className="buttons">
                    <button className='button-85' onClick={() => {
                        setId(prev[prevIndex])
                        setPrevIndex(prevIndex - 1)
                    }}>
                        Prev Video
                    </button>
                    <button className='button-85' onClick={() => {
                        setPrevIndex(prev.length);
                        if(id)setPrev([...prev, id])
                        setId(Math.floor(Math.random() * 40));
                    }}>
                        Next Video
                    </button>
                </div>



            </div>

            <div className='footer'>
                <div className="madeBy">
                    <h3>Made by </h3>
                    <a href="https://github.com/SunmeetS" target="blank">&nbsp; Sunmeet Singh</a>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/sunmeetsinghhh" target="blank" className="linkedIn">&nbsp;  LinkedIn </a>
                    <a href="https://twitter.com/sunmeetsingh_" target="blank" className="twitter">&nbsp;  Twitter </a>
                    <a href="https://www.instagram.com/_sunmeetsingh_/" target="blank" className="instagram"> &nbsp; Instagram</a>
                </div>
            </div>
        </div>
    )
}