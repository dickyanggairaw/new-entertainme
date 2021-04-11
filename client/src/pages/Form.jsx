import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client';

export default function Form (){
    const [input, setInput] = useState({
        title: '',
        overview: '',
        poster_path: '',
        popularity: 0
    })
    const { slug } = useParams()

    const ADD_DATA = gql`
    mutation Add${slug}($type: Input${slug}) {
        add${slug}(${slug}: $type) {
        _id
        }
    }`
    const [addData, { data }] = useMutation(ADD_DATA)
    function handleChange(e){
        const { name, value } = e.target
        setInput({...input, [name]: value})
        // console.log(input)
    }
    function addForm (e){
        e.preventDefault()
        addData({ variables: { type: {...input, popularity: +input.popularity} }})
    }
    return (
        <div className="container">
            <form action="" onSubmit={(e) => addForm(e)}>
                <input type="text" name="title" id="" onChange={(e) => handleChange(e)} placeholder="title"/><br/>
                <input type="text" name="overview" id="" onChange={(e) => handleChange(e)} placeholder="overview"/><br/>
                <input type="text" name="poster_path" id="" onChange={(e) => handleChange(e)} placeholder="poster_path"/><br/>
                <input type="text" name="popularity" id="" onChange={(e) => handleChange(e)} placeholder="popularity"/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}