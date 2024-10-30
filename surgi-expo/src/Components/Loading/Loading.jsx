import React from 'react'
import { FadeLoader } from 'react-spinners'
import "./loading.css"

export default function Loading() {
    return (
        <>
            <div className="loading-container">
                <FadeLoader color="#103DD2" />
            </div>

        </>
    )
}
