import React,{useEffect} from 'react'
import {imageAction} from '../action/imageAction'
import {useDispatch} from 'react-redux'

function Child() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(imageAction())
    }, [dispatch])

    return (
        <div>
         
        </div>
    )
}

export default Child
