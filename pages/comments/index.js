import React,{useState,useEffect} from 'react';
import Link from 'next/link'


const url = process.env.NODE_ENV === "production" ? "https://learn-nextjs-six-hazel.vercel.app" : "http://localhost:3000"

const Comments = () => {
    const [input,setInput] = useState("")
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        const fetcher = async()=>{
            try {
                const res = await fetch(`${url}/api/comments`)
                const data = await res.json()
                console.log(data);
                if (data.success) {
                    setData(data.data)
                }else{
                    setError(true)
                }
            
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
            
        }
        fetcher()
    }, [])

    const postComment =async ()=>{
        const res = await fetch(`${url}/api/comments`,{
            method:"POST",
            body:JSON.stringify({comment:input}),
            headers:{
                "Content-Type":"application/josn"
            }
        })
        const data = await res.json()
        setData(data)
        setInput("")
    }

    const deleteComment =async (id)=>{
        const res = await fetch(`${url}/api/comments/${id}`,{
            method:"DELETE"
        })
        const data = await res.json()
       
        setData(data)
        
    }

    if (loading) {
        return <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <h2>Loading...</h2>
        </div>
    }
    if (error) {
        return <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <h2>Unauthenticated user,please login first</h2>
            
        </div>
    }

    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
                <Link href="/" passHref>
                    Home
                </Link>
            </div>
            <div>
                <input placeholder="write comment" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button onClick={postComment}>Submit</button>
            </div>
        <div>
            {data?.map((comment,index)=>{
                return(
                    <div key={index} style={{display:"flex",alignItems:"center"}}>
                        <Link href={`/comments/${comment?.id}`} passHref>
                        <p>{comment.comment}</p>
                        </Link>
                        <p onClick={()=>deleteComment(comment?.id)}>Delete</p>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Comments
