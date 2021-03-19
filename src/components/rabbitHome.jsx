import React, { memo, useRef, useEffect } from 'react'

import styled from 'styled-components'

import RabbitHomeImage from '../images/rabbit-home.png'

const RabbitHome = memo(({ IMAGE_HEIGHT, scale, setRabbitHomeCoordinates, mapClientX, mapClientY }) => {

    const rabbitHomeRef = useRef()
    useEffect(() => {
        setRabbitHomeCoordinates({
            x: rabbitHomeRef.current.getBoundingClientRect().x - mapClientX - 1,
            y: rabbitHomeRef.current.getBoundingClientRect().y - mapClientY - 1
        })
    }, [])

    return (
        <RabbitHomeWrapper
            src={RabbitHomeImage}
            ref={rabbitHomeRef}
            imageHeight={IMAGE_HEIGHT}
            scale={scale}
            transformX={Math.floor(Math.random() * (scale)) * IMAGE_HEIGHT}
            transformY={Math.floor(Math.random() * (scale)) * IMAGE_HEIGHT}
        />
    )
})

const RabbitHomeWrapper = styled.img`
    height: ${props => props.imageHeight}px;
    border-radius: 30px;    
    position: absolute;
    top:${props => props.transformY}px;
    left:${props => props.transformX}px
`

export default RabbitHome
