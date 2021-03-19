import React, { Fragment, useState } from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import PlayingMapSizeDropDown from './components/dropDown.jsx'
import GameMap from './components/GameMap.jsx'

const mapSizeOptions = [
    { _id: 1, label: '10х10', value: '{"mapSize":"800","scale":10,"wolfsQuantity":5}' },
    { _id: 2, label: '7х7', value: '{"mapSize":"560","scale":7,"wolfsQuantity":3}' },
    { _id: 3, label: '5х5', value: '{"mapSize":"400","scale":5,"wolfsQuantity":2}' }
]

const App = () => {

    const [selectedMapSizes, setSelectedMapSizes] = useState(mapSizeOptions[0].value)
    const [isStartGame, setIsStartGame] = useState(false)

    return (
        <Fragment >
            <Tools>
                <PlayingMapSizeDropDown
                    options={mapSizeOptions}
                    setSelectedMapSizes={setSelectedMapSizes}
                />
                <StartGameButton onClick={() => setIsStartGame(prevState => !prevState)}>{isStartGame ? 'End Game' : 'Start Game'}</StartGameButton>
            </Tools>
            {isStartGame && <GameMap selectedMapSizes={JSON.parse(selectedMapSizes)} />}
            <GlobalStyle />
        </Fragment>
    )
}

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background-color: #A8CF45;
    }
`
const Tools = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
`
const StartGameButton = styled.button`
    outline: none;
    cursor: pointer;
    background-color: #FF9A3E;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    color: white;
    transition: all .1s;
    &:hover{
        background-color: #FF823E;
    }
`
export default App
