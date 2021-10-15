import React from 'react'
import Link from 'next/link'

 const MainNavigation = () => {
    return (
        <div style={{width:"100%",maxWidth:"500px",margin:"20px auto",padding:"10px"}}>
            <ul style={{display:"flex",alignItems:"center"}}>
                <li style={{paddingRight:20}}>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/newMeetup">New Meetup</Link>
                </li>
            </ul>
        </div>
    )
}

export default MainNavigation;
