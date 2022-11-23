import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import ReactPlayer from 'react-player'

export const RandomStandupComedy = () => {

    let [links, setLinks] = useState([[
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=P6gyWnb_E0M'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=CFIUDdQTws4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=XCYNXxqYXW0'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=ARR5H72TC74'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=P3HoSInWfXU'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=ZOfavB9TrII'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=BaeM22LFLfQ'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=Plok1ZBSB8I'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=VZ82O83gttg'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=GFMcqnB4znE'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=ATWNeg-f-Fg'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=LF7glh34qbE'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=q23Jc2Db9eE'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=Md-Jnh64UDg'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=Lbl3CW9tKe4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=zgr-EEFY8mI'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=HdNxM0BMmZI'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=w7LaB4gRCc4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=ok-F2j_uOqA'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=9sZcKb7GCJM'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=RA9DBDgh5fg'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=uN1idr4UAu4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=fEvJ7XAieYM'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=wCBCcj4ip5s'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=5yjOYXCmHmQ'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=lXL1Gn5fwes'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=s3JT26MNk78'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=sVYMYMjm5aw'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=i2eXHM01pEA'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=6mgWjUDLGv4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=OQpNJeiGS_Y'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=6v_QJPyrhW4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=nk9k6zOFQoI'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=XbcblJhv4UE'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=BXJruU_6SzQ'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=PGVkmcXqMwE'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=FHVn7a_EQEU'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=FELTbocNob4'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=gS7sfygLXBk'
        },
        {
          date: '2022-11-23',
          url: 'https://www.youtube.com/watch?v=zXqf4kDMT-A'
        }
      ]])
    let [id, setId] = useState(Math.floor(Math.random() * 40));
    let [prev, setPrev] = useState([id])
    let [prevIndex, setPrevIndex] = useState()

    // useEffect(() => {
    //     try {
    //         axios.get('https://express-server-production-dd8e.up.railway.app/getLatestLinks').then((res) => {
    //             setLinks(res.data)
    //         });
    //     } catch (err) {
    //         console.log()
    //     }
    // }, [])

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
                        if(id)setPrev([...prev, id]);
                        console.log(links);
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