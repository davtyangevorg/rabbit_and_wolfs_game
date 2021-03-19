import React, { memo, useState } from 'react'

import styled from 'styled-components'

import RabbitHome from './rabbitHome.jsx'
import Rabbit from './rabbit.jsx'
import Wolf from './wolf.jsx'

const IMAGE_HEIGHT = 80
const MAP_CLIENT_Y = 96

const GameMap = memo(({ selectedMapSizes }) => {

    const mapClientX = (window.innerWidth - selectedMapSizes.mapSize) / 2
    const [rabbitHomeCoordinates, setRabbitHomeCoordinates] = useState({ x: null, y: null })

    const [rabbitCoordinates, setRabbitCoordinates] = useState({ x: null, y: null })

    return (
        <MapWrapper selectedMapSizes={selectedMapSizes} >
            <RabbitHome
                IMAGE_HEIGHT={IMAGE_HEIGHT}
                scale={selectedMapSizes.scale}
                setRabbitHomeCoordinates={setRabbitHomeCoordinates}
                mapClientX={mapClientX}
                mapClientY={MAP_CLIENT_Y}
            />
            <Rabbit
                IMAGE_HEIGHT={IMAGE_HEIGHT}
                scale={selectedMapSizes.scale}
                mapClientX={mapClientX}
                mapClientY={MAP_CLIENT_Y}
                rabbitHomeCoordinates={rabbitHomeCoordinates}
                rabbitCoordinates={rabbitCoordinates}
                setRabbitCoordinates={setRabbitCoordinates}
            />
            <Wolf
                mapClientX={mapClientX}
                mapClientY={MAP_CLIENT_Y}
                selectedMapSizes={selectedMapSizes}
                IMAGE_HEIGHT={IMAGE_HEIGHT}
                rabbitCoordinates={rabbitCoordinates}
            />
            {/* <Wolf
                mapClientX={mapClientX}
                mapClientY={MAP_CLIENT_Y}
                selectedMapSizes={selectedMapSizes}
                IMAGE_HEIGHT={IMAGE_HEIGHT}
                rabbitCoordinates={rabbitCoordinates}
            /> */}

        </MapWrapper>
    )
})

const MapWrapper = styled.div`
    position: relative;
    border:1px solid black;
    width: ${props => props.selectedMapSizes.mapSize}px;
    height: ${props => props.selectedMapSizes.mapSize}px;
    margin:auto
`

export default GameMap
