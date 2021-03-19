import React, { Fragment, useState, memo, useEffect } from 'react'

import Animal from './animal.jsx'

import WolfImage from '../images/wolf.png'

import { wolfStepLogicRightKey, wolfStepLogicLeftKey, wolfStepLogicUpKey, wolfStepLogicDownKey } from './wolfStepLogic.js'

const Wolf = memo(({ mapClientX, mapClientY, selectedMapSizes, IMAGE_HEIGHT, rabbitCoordinates }) => {

    const [wolfCoordinates, setWolfCoordinates] = useState({ x: null, y: null })
    const [wolfSteps, setWolfSteps] = useState({
        stepX: Math.floor(Math.random() * selectedMapSizes.scale),
        stepY: Math.floor(Math.random() * selectedMapSizes.scale),
        height: IMAGE_HEIGHT
    })
    useEffect(() => {
        if (wolfCoordinates.x !== null && rabbitCoordinates.x === wolfCoordinates.x && rabbitCoordinates.y === wolfCoordinates.y) {
            alert('Game Over')
        }
    }, [wolfCoordinates])

    useEffect(() => {
        function pressKey(event) {
            const stepDirection = event.key.replace('Arrow', '')
            if (stepDirection === 'Right') {
                if (wolfSteps.stepX === selectedMapSizes.scale - 1) {
                    setWolfSteps(prevState => {
                        return { ...prevState, stepX: prevState.stepX - 1 }
                    })
                } else {
                    wolfStepLogicRightKey(IMAGE_HEIGHT, wolfCoordinates, rabbitCoordinates, setWolfSteps)
                }
            }
            else if (stepDirection === 'Left') {
                if (wolfSteps.stepX === 0) {
                    setWolfSteps(prevState => {
                        return { ...prevState, stepX: prevState.stepX + 1 }
                    })
                } else {
                    wolfStepLogicLeftKey(IMAGE_HEIGHT, wolfCoordinates, rabbitCoordinates, setWolfSteps)
                }
            }
            else if (stepDirection === 'Up') {
                if (wolfSteps.stepY === 0) {
                    setWolfSteps(prevState => {
                        return { ...prevState, stepY: prevState.stepY + 1 }
                    })
                } else {
                    wolfStepLogicUpKey(IMAGE_HEIGHT, wolfCoordinates, rabbitCoordinates, setWolfSteps)
                }
            }
            else if (stepDirection === 'Down') {
                if (wolfSteps.stepY === selectedMapSizes.scale - 1) {
                    setWolfSteps(prevState => {
                        return { ...prevState, stepY: prevState.stepY - 1 }
                    })
                } else {
                    wolfStepLogicDownKey(IMAGE_HEIGHT, wolfCoordinates, rabbitCoordinates, setWolfSteps)
                }
            }
        }

        window.addEventListener('keydown', pressKey)
        return () => window.removeEventListener('keydown', pressKey)
    })

    return (
        <Fragment>
            <Animal
                image={WolfImage}
                steps={wolfSteps}
                setAnimalCoordinates={setWolfCoordinates}
                mapClientX={mapClientX}
                mapClientY={mapClientY}
            />
        </Fragment>
    )
})

export default Wolf
