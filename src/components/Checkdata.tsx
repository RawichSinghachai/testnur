import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/stores/store';
import axios from 'axios';
import { save } from '../stores/UserDataStore';
import { useRouter } from 'next/router'
type Props = {}

const Checkdata = (props: Props) => {
    const router = useRouter()
    const userdata = useSelector((state:RootState)=>state.UserDataStore)
    const dispatch = useDispatch()


useEffect(() => {

    //send datauser from database to reducx


    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/auth`, {
        token: sessionStorage.getItem('token')
    },
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } }
    ).then(datauser => {
        dispatch(save(datauser.data))
        console.log(datauser.data);
    }).catch((err) => {
        console.log('Not login in yet')
        //for test
    })


    //block path when forget login

    //for test
    // if(!sessionStorage.getItem('token')){
    //     if(router.pathname === '/home' || router.pathname === '/display'|| router.pathname === '/chart' || router.pathname === '/advice' || router.pathname === '/profile'){
    //         router.push('/login')
    //     } 
    // }

        //when forget login block '/profile' 
    
    // if(!sessionStorage.getItem('token')){
    //     if(router.pathname === '/login'){
    //         router.back()
    //     }  
    // }
},[])

    return (
        <>
        </>
    )
}

export default Checkdata