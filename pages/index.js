import React from 'react';
import MeetupList from '../componets/meetuplist/MeetupList';
import {MongoClient} from 'mongodb';
import Head from 'next/head'

const HomePage = (props) => {
  return(
    <React.Fragment>
      <Head>
        <title>Next Meetups</title>
        <meta name="description" content="A list of next meetups" />
      </Head>
      <MeetupList meetupList={props.meetupList} />
    </React.Fragment>

  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://kazi:B%40angla12@cluster0.7zy5v.mongodb.net/meetups?retryWrites=true&w=majority")
  const db = client.db();
  const meetupsCollection = db.collection("meetups")
  const result =  await meetupsCollection.find().toArray()
  client.close()
  return{
      props:{
          meetupList: result.map(item =>({
            title:item?.title,
            summery:item?.summery,
            image:item?.image,
            id : item._id.toString()
          }))
      },
      revalidate:10
  }
  
}

export default HomePage
