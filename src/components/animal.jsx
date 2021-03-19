import React, { useRef, useEffect, memo } from 'react'
import styled from 'styled-components'


const Animal = memo(({  image, steps, setAnimalCoordinates, mapClientX, mapClientY}) => {

    const animalRef = useRef()
    useEffect(() => {
        setAnimalCoordinates({
            x: animalRef.current.getBoundingClientRect().x - mapClientX - 1,
            y: animalRef.current.getBoundingClientRect().y - mapClientY - 1
        })
    }, [steps])

    return (
        <AnimalWrapper ref={animalRef} src={image} steps={steps} />
    )
})

const AnimalWrapper = styled.img`
    position: absolute;
    height: ${props => props.steps.height}px;
    width: ${props => props.steps.height}px;
    top:${props => props.steps.stepY * props.steps.height}px;
    left:${props => props.steps.stepX * props.steps.height}px
`

export default Animal