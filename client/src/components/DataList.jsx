import React from 'react'

export default function DataList (props) {
    const { data } = props
    return (
        <div className="col-4 mb-4">
            <div className="card">
                <img src={data.poster_path} alt="" srcset=""/>
                <div className="card-body">
                    <h5>{data.title}</h5>
                    <p>{data.overview}</p>
                </div>
            </div>
        </div>
    )
}