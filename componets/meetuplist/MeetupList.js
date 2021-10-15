import React from 'react';
import Link from 'next/link';
import classes from './MeetupList.module.css'

const MeetupList = ({meetupList}) => {
    return (
        <div className={classes.container}>
            {meetupList?.map((item,index)=>{
                return(
                    <div className={classes.singleMeetup} key={index}>
                        <h3>{item?.title}</h3>
                        <img src={item?.image} alt="imgs" style={{width:"100%",height:300}} />
                        <button className={classes.button}>
                        <Link href={`/${item?.id}`}>
                            Show More
                        </Link>
                        </button>
                    </div>
                )
            })}
            
        </div>
    )
}




export default MeetupList