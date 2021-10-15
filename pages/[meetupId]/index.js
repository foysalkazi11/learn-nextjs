import React from 'react';
import {useRouter} from 'next/router';
import fakeData from '../../fakeData/fakeData'
import MeetupDetails from '../../componets/meetupDetails/MeetupDetails'
import {MongoClient,ObjectId} from 'mongodb';
import Head from 'next/head'

const Details = (props) => {
    
    return(
        <React.Fragment>
            <Head>
        <title>{props?.singleMeetup?.title}</title>
        <meta name="description" content={props?.singleMeetup?.summery} />
      </Head>
      <MeetupDetails singleMeetup={props?.singleMeetup}  />
        </React.Fragment>
    )
}



export async function getStaticPaths(){

    const client = await MongoClient.connect("mongodb+srv://kazi:B%40angla12@cluster0.7zy5v.mongodb.net/meetups?retryWrites=true&w=majority")
  const db = client.db();
  const meetupsCollection = db.collection("meetups")
  const result =  await meetupsCollection.find({},{_id:1}).toArray()
  
  client.close()
    
    const key = result.map(item => {
        return {params:  {meetupId: item._id.toString()}}
    })

    
    return{
        fallback:false, // if you want to create diynamic id automatically then use fallback : true, otherwise you have to mention which id should use. If you use fallback: true and mention some id then it will create those page Static Site Generation.
        paths:key
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect("mongodb+srv://kazi:B%40angla12@cluster0.7zy5v.mongodb.net/meetups?retryWrites=true&w=majority")
  const db = client.db();
  const meetupsCollection = db.collection("meetups")
  const result =  await meetupsCollection.findOne({_id:ObjectId(meetupId) })
  client.close()
  console.log("result",result);
    if (meetupId) {
        return{
            props:{
                 singleMeetup:{
                    title:result?.title,
                    summery:result?.summery,
                    image:result?.image,
                    id : result._id.toString()
                 }
            }
        } 
    }
}

export default Details
