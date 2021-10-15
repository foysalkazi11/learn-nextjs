import React from 'react';
import MeetupForm from '../../componets/newMeetup/MeetupForm';
import {useRouter} from 'next/router';
import Head from 'next/head'


const Index = () => {
    const router = useRouter()
    const submitData = async data =>{
        const res =  await fetch("/api/createNewMeetup",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const result = await res.json()

        router.push("/")
    }
    return (
        <React.Fragment>
               <Head>
        <title>Add Single meetups</title>
        <meta name="description" content="Add Single meetups" />
      </Head>
      <MeetupForm submitData={submitData} />
        </React.Fragment>
    )
}

export default Index
