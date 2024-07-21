import React from 'react'

function SingleCompetition({ params }) {
    console.log(params.id);

    return (
        <div>
            ID: {params.id}
        </div>
    )
}

export default SingleCompetition