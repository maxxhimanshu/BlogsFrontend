import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
const GetBlogs = () => {
    const [blogs, setBlogs] = useState([])

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [category, setCategory] = useState("")
    const [authorId, setAuthorId] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [blogId, setBlogId] = useState("")
    const [status, setStatus] = useState(true)


    useEffect(() => {
        fetch("http://localhost:3001/blogs").then((response) => {
            response.json().then(data => {
                setBlogs(data.data)
            })
        })
    }, [])
    
    function updateBlog(index) {
        setStatus(false)
        setTitle(blogs[index].title)
        setBody(blogs[index].body)
        setTags(blogs[index].tags)
        setCategory(blogs[index].category)
        setAuthorId(blogs[index].authorId)
        setSubcategory(blogs[index].subcategory)
        setBlogId(blogs[index]._id)
    }



    function SaveBlogs() {
        let info = { title, body, tags, category, authorId, subcategory }

        fetch(`http://localhost:3001/Blogs/${blogId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)

        }).then(response => response.json().then(data => console.log(data)))
        setStatus(true)

    }
    return (
        <div>
            {status?
            <div>
                <Link to="/"><h3>Home</h3></Link><br /><br />
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Blog Id</th>
                            <th>Title</th>

                            <th>Body</th>
                            <th>Category</th>
                            <th>Sub Category</th>
                            <th>tags</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            blogs.map((data, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.title}</td>

                                    <td>{data.body}</td>
                                    <td>{data.category}</td>
                                    <td>{data.subcategory}</td>
                                    <td>{data.tags}</td>
                                    <td><button onClick={() => updateBlog(index)}>Edit</button></td>
                                </tr>
                            ))
                        }
                    </tbody>


                </table>
            </div>:
            <div>

                <h1>Update</h1>
                <br />
                <input type="text" value={title} placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} /><br /><br />
                <input type="text" value={body} placeholder="body" onChange={(e) => { setBody(e.target.value) }} /><br /><br />
                <input type="text" value={tags} placeholder="tags" onChange={(e) => { setTags(e.target.value) }} /><br /><br />
                <input type="text" value={authorId} placeholder="authorId" onChange={(e) => { setAuthorId(e.target.value) }} /><br /><br />
                <input type="text" value={category} placeholder="category" onChange={(e) => { setCategory(e.target.value) }} /><br /><br />
                <input type="text" value={subcategory} placeholder="subcategory" onChange={(e) => { setSubcategory(e.target.value) }} /><br /><br />

                <button onClick={SaveBlogs}>Save</button>


            </div>
        }
        </div>
    )
}

export default GetBlogs