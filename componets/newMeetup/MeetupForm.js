import React,{useState} from 'react';
import classes from './MeetupForm.module.css';

const MeetupForm = (props) => {
    const [data,setData] =useState ({
        title:"",
        summery:"",
        image:"",
    })

    const handleInput = (e)=>{
        const {name,value} = e.target
        setData(pre =>({...pre,[name]:value}))
    }

    const handleSubmit = e=>{
        e.preventDefault()
        props.submitData(data)
    }
    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
            {/* <input name="id" placeholder="ID" type="number" value={data?.id} onChange={handleInput} /> */}
            <input className={classes.input} name="title" placeholder="Title" type="text" value={data?.title} onChange={handleInput} />
            <input className={classes.input} name="summery" placeholder="Summery" type="text" value={data?.summery} onChange={handleInput} />
            <input className={classes.input} name="image" placeholder="ImageUrl" type="text" value={data?.image} onChange={handleInput} />
            <button className={classes.input} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MeetupForm
