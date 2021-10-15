import React,{useEffect, useState} from 'react';
import fakeData from '../../fakeData/fakeData';
import Link from 'next/link';
import classes from './MeetupDetails.module.css'

const MeetupDetails = ({singleMeetup}) => {
   
    return(
        <div className={classes.container} >
            <h3>{singleMeetup?.title ? singleMeetup?.title :null}</h3>
            <img src={singleMeetup?.image ? singleMeetup?.image : null} alt="imgs" className={classes.img} />
            <p>{singleMeetup?.summery ? singleMeetup?.summery : null}</p>
            <button className={classes.button}>
            <Link href={`/`}>
                Back Home
            </Link>
            </button>
        </div>
    )
}

export default MeetupDetails