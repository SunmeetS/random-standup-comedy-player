import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import ReactPlayer from 'react-player'

export const RandomStandupComedy = () => {

    let [videoId, setVideoId] = useState("")
    let [links, setLinks] = useState([])
    let [id, setId] = useState(Math.floor(Math.random() * 40));

    useEffect(() => {
        try {
            axios.get('http://localhost:3001/getLatestLinks').then((res) => {
                setLinks(res.data)
            });
        } catch (err) {
            console.log(String(err))
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
                        pip={true} url={links[id]?.url} />

                    <ReactPlayer
                        playsInline={true}
                        className='react-player'
                        playing={true}
                        controls={true}
                        volume={0.75}
                        pip={true} url='https://www.youtube.com/watch?v=pyvNP5qg0tk&ab_channel=PTCPUNJABI' />

                </div>
                <button className='button-85' onClick={() => { setId(Math.floor(Math.random() * 40)) }}>
                    Not this one ? <br /> Click for Next Video
                </button>
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