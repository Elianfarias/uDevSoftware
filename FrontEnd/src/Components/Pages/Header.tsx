import React, { useEffect, useState } from 'react';
import Titulo from '../../Model/Titulo'
import titulosData from '../../Data/titulos.json'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
require('../../Assets/scss/header.scss')

export default function Header() {
    const [titulos, setTitulos] = useState(new Array<Titulo>());

    useEffect(() => {
        setTitulos(titulosData)
    }, [])

    return (
        <div>
            <AppBar className={"colorMenu app_bar"} position="static">
                <Toolbar>
                    <Typography variant="h6" className={"title"}>
                        News
                    </Typography>
                    <Typography variant="h6" className={"title"}>
                        News
                    </Typography>
                    <Typography variant="h6" className={"title"}>
                        News
                    </Typography>
                    <Typography variant="h6" className={"title"}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>

            {titulos.map((titulo: Titulo) => <div>{titulo.nombre}</div>)}

        </div>
    )
}

