import {MongoClient} from 'mongodb'

export default async function handler (req,res){
    if (req.method === "POST") {
        const data = req?.body
        const client = await MongoClient.connect("mongodb+srv://kazi:B%40angla12@cluster0.7zy5v.mongodb.net/meetups?retryWrites=true&w=majority")
        const db = client.db()
        const meetupsCollection = db.collection("meetups")
        const result =  await meetupsCollection.insertOne(data)
        client.close()
        res.status(201).json({message:"meetup inserted",data:result})
    }

    
}