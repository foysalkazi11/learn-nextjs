import React from 'react'
import Link from 'next/link';
import classes from './MainNavigation.module.css'

 const MainNavigation = () => {
    return (
        <div className={classes.container}>
            <ul style={{display:"flex",alignItems:"center"}}>
                <li style={{paddingRight:20}}>
                    <Link href="/">Home</Link>
                </li>
                <li style={{paddingRight:20}}>
                    <Link href="/newMeetup">New Meetup</Link>
                </li>
                <li>
                    <Link href="/comments">Comments</Link>
                </li>
            </ul>
        </div>
    )
}

export default MainNavigation;
