import React, { memo, Fragment, useState, useEffect } from 'react'

import RabbitImage from '../images/rabbit.png'

import Animal from './animal.jsx'

const Rabbit = memo(({ IMAGE_HEIGHT, scale, mapClientX, mapClientY, rabbitHomeCoordinates, rabbitCoordinates, setRabbitCoordinates }) => {

    const [rabbitSteps, setRabbitSteps] = useState({
        stepX: Math.floor(Math.random() * scale),
        stepY: Math.floor(Math.random() * scale),
        height: IMAGE_HEIGHT
    })

    useEffect(() => {
        if (rabbitCoordinates.x !== null && rabbitCoordinates.x === rabbitHomeCoordinates.x && rabbitCoordinates.y === rabbitHomeCoordinates.y) {
            alert('Finish win')
        }
    }, [rabbitCoordinates])




    useEffect(() => {
        function pressKey(event) {
            const stepDirection = event.key.replace('Arrow', '')
            if (stepDirection === 'Right') {
                if (rabbitSteps.stepX === scale - 1) {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepX: 0 }
                    })
                } else {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepX: prevState.stepX + 1 }
                    })
                }
            }
            else if (stepDirection === 'Left') {
                if (rabbitSteps.stepX === 0) {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepX: scale - 1 }
                    })
                } else {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepX: prevState.stepX - 1 }
                    })
                }
            }
            else if (stepDirection === 'Up') {
                if (rabbitSteps.stepY === 0) {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepY: scale - 1 }
                    })
                } else {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepY: prevState.stepY - 1 }
                    })
                }
            }
            else if (stepDirection === 'Down') {
                if (rabbitSteps.stepY === scale - 1) {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepY: 0 }
                    })
                } else {
                    setRabbitSteps(prevState => {
                        return { ...prevState, stepY: prevState.stepY + 1 }
                    })
                }
            }
        }

        window.addEventListener('keydown', pressKey)
        return () => window.removeEventListener('keydown', pressKey)
    })

    return (
        <Fragment >
            <Animal
                image={RabbitImage}
                steps={rabbitSteps}
                setAnimalCoordinates={setRabbitCoordinates}
                mapClientX={mapClientX}
                mapClientY={mapClientY}
            />
        </Fragment>
    )
})

export default Rabbit
