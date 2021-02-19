import React from 'react'
import { Redirect } from 'react-router-dom'

import { destroy } from "../../functions/auth";

const Sair = () => {
    destroy()
    return <Redirect to='/'/>
}

export default Sair
