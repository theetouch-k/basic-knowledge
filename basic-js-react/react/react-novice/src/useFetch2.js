import {useEffect, useState, useRef} from 'react'

export const useFetch2 = url => {
    const isCurrent = useRef(true)
    const [data, setData] =useState({data: null, loading: true});

    useEffect(()=> {
        return ()=> {
            // called when the component is goinng to unmount
            isCurrent.current = false;
        }
    }, [])

    useEffect(() => {
        // setData({data: null, loading: true})
        setData(state => ({data: state.data, loading: true}))
        fetch(url)
            .then(x=> x.text())
            .then(y=> {
                setTimeout(()=> {
                    if (isCurrent.current) {
                        setData({data:y, loading: false})
                    }
                }, 1000)
            })
    }, [url, setData])

    return data
}