import React,{useState} from 'react'

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
        <div style={{display:"flex",flexDirection:"column",width:"100%",maxWidth:"500px",margin:"20px auto"}}>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
            {/* <input name="id" placeholder="ID" type="number" value={data?.id} onChange={handleInput} /> */}
            <input name="title" placeholder="Title" type="text" value={data?.title} onChange={handleInput} />
            <input name="summery" placeholder="Summery" type="text" value={data?.summery} onChange={handleInput} />
            <input name="image" placeholder="ImageUrl" type="text" value={data?.image} onChange={handleInput} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MeetupForm
