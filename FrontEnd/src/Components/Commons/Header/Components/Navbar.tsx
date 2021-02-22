import React, { useEffect, useState } from 'react';
import Titulo from '../../../../Model/Titulo'
import titulosData from '../../../../Data/titulos.json'
import { Typography } from '@material-ui/core';

export default function Header() {
    const [titulos, setTitulos] = useState(new Array<Titulo>());

    useEffect(() => {
        setTitulos(titulosData)
    }, [])

    return (
        <Typography className="menu">
            <ul>
                {titulos.map((titulo) => {
                    return (<li>
                        <a href="#">
                            {titulo.nombre}
                        </a>
                    </li>)
                })}
            </ul>
        </Typography>
    )
}

