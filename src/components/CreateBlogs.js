import React, { useState } from 'react'

const CreateBlogs = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [category, setCategory] = useState("")
    const [authorId, setAuthorId] = useState("")
    const [subcategory, setSubcategory] = useState("")

    function SaveBlogs() {
        let info = { title, body, tags, category, authorId, subcategory }


        fetch("http://localhost:3001/Blog", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)

        }).then(response => response.json().then(data => console.log(data)))

    }


    return (
        <div>
            <h3>Create Blogs</h3>

            <input type="text" value={title} placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} /><br /><br />
            <input type="text" value={body} placeholder="body" onChange={(e) => { setBody(e.target.value) }} /><br /><br />
            <input type="text" value={tags} placeholder="tags" onChange={(e) => { setTags(e.target.value) }} /><br /><br />
            <input type="text" value={authorId} placeholder="authorId" onChange={(e) => { setAuthorId(e.target.value) }} /><br /><br />
            <input type="text" value={category} placeholder="category" onChange={(e) => { setCategory(e.target.value) }} /><br /><br />
            <input type="text" value={subcategory} placeholder="subcategory" onChange={(e) => { setSubcategory(e.target.value) }} /><br /><br />

            <button onClick={SaveBlogs}>Save</button>
            <a href='/'><h3>Home</h3></a>
        </div>
    )
}

export default CreateBlogs