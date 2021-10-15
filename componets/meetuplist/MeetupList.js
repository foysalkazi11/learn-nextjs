import React from 'react';
import Link from 'next/link'

const MeetupList = ({meetupList}) => {
    return (
        <div style={{display:"flex",flexDirection:"column",width:"100%",maxWidth:"500px",margin:"20px auto"}}>
            {meetupList?.map((item,index)=>{
                return(
                    <div style={{display:"flex",flexDirection:"column"}} key={index}>
                        <h3>{item?.title}</h3>
                        <img src={item?.image} alt="imgs" style={{width:"100%",height:300}} />
                        <Link href={`/${item?.id}`}>
                            Show More
                        </Link>
                    </div>
                )
            })}
            
        </div>
    )
}




export default MeetupList