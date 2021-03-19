const setWolfStep = (step, operation, setWolfSteps) => {
    if (operation === '+') {
        setWolfSteps(prevState => {
            return { ...prevState, [step]: prevState[step] + 1 }
        })
    } else {
        setWolfSteps(prevState => {
            return { ...prevState, [step]: prevState[step] - 1 }
        })
    }
}

export const wolfStepLogicRightKey = (imageHeight, wolfCoordinates, rabbitCoordinates, setWolfSteps) => {
    if (wolfCoordinates.x > rabbitCoordinates.x) {
        if (rabbitCoordinates.x - wolfCoordinates.x === -imageHeight) {
            if (rabbitCoordinates.y < wolfCoordinates.y) {
                setWolfStep('stepY', '-', setWolfSteps)
            } else if (rabbitCoordinates.y > wolfCoordinates.y) {
                setWolfStep('stepY', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        }
        else {
            setWolfStep('stepX', '-', setWolfSteps)
        }
    }
    if (wolfCoordinates.x < rabbitCoordinates.x) {
        if (rabbitCoordinates.x - wolfCoordinates.x === -imageHeight) {
            if (rabbitCoordinates.y < wolfCoordinates.y) {
                setWolfStep('stepY', '-', setWolfSteps)
            } else if (rabbitCoordinates.y > wolfCoordinates.y) {
                setWolfStep('stepY', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        } else {
            setWolfStep('stepX', '+', setWolfSteps)
        }
    }
    if (wolfCoordinates.x === rabbitCoordinates.x) {
        setWolfStep('stepX', '+', setWolfSteps)
    }
}

export const wolfStepLogicLeftKey = (imageHeight, wolfCoordinates, rabbitCoordinates, setWolfSteps) => {
    if (wolfCoordinates.x < rabbitCoordinates.x) {
        if (rabbitCoordinates.x - wolfCoordinates.x === imageHeight) {
            if (rabbitCoordinates.y < wolfCoordinates.y) {
                setWolfStep('stepY', '-', setWolfSteps)
            } else if (rabbitCoordinates.y > wolfCoordinates.y) {
                setWolfStep('stepY', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        }
        else {
            setWolfStep('stepX', '+', setWolfSteps)
        }
    }
    if (wolfCoordinates.x > rabbitCoordinates.x) {
        if (rabbitCoordinates.x - wolfCoordinates.x === imageHeight) {
            if (rabbitCoordinates.y < wolfCoordinates.y) {
                setWolfStep('stepY', '-', setWolfSteps)
            } else if (rabbitCoordinates.y > wolfCoordinates.y) {
                setWolfStep('stepY', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        } else {
            setWolfStep('stepX', '-', setWolfSteps)
        }
    }
    if (wolfCoordinates.x === rabbitCoordinates.x) {
        setWolfStep('stepX', '-', setWolfSteps)
    }
}

export const wolfStepLogicUpKey = (imageHeight, wolfCoordinates, rabbitCoordinates, setWolfSteps) => {
    if (wolfCoordinates.y < rabbitCoordinates.y) {
        if (rabbitCoordinates.y - wolfCoordinates.y === imageHeight) {
            if (rabbitCoordinates.x < wolfCoordinates.x) {
                setWolfStep('stepX', '-', setWolfSteps)
            } else if (rabbitCoordinates.x > wolfCoordinates.x) {
                setWolfStep('stepX', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        }
        else {
            setWolfStep('stepY', '+', setWolfSteps)
        }
    }
    if (wolfCoordinates.y > rabbitCoordinates.y) {
        if (rabbitCoordinates.y - wolfCoordinates.y === imageHeight) {
            if (rabbitCoordinates.x < wolfCoordinates.x) {
                setWolfStep('stepX', '-', setWolfSteps)
            } else if (rabbitCoordinates.x > wolfCoordinates.x) {
                setWolfStep('stepX', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        } else {
            setWolfStep('stepY', '-', setWolfSteps)
        }
    }
    if (wolfCoordinates.y === rabbitCoordinates.y) {
        setWolfStep('stepY', '-', setWolfSteps)
    }
}

export const wolfStepLogicDownKey = (imageHeight, wolfCoordinates, rabbitCoordinates, setWolfSteps) => {
    if (wolfCoordinates.y > rabbitCoordinates.y) {
        if (rabbitCoordinates.y - wolfCoordinates.y === -imageHeight) {
            if (rabbitCoordinates.x < wolfCoordinates.x) {
                setWolfStep('stepX', '-', setWolfSteps)
            } else if (rabbitCoordinates.x > wolfCoordinates.x) {
                setWolfStep('stepX', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        }
        else {
            setWolfStep('stepY', '-', setWolfSteps)
        }
    }
    if (wolfCoordinates.y < rabbitCoordinates.y) {
        if (rabbitCoordinates.y - wolfCoordinates.y === -imageHeight) {
            if (rabbitCoordinates.x < wolfCoordinates.x) {
                setWolfStep('stepX', '-', setWolfSteps)
            } else if (rabbitCoordinates.x > wolfCoordinates.x) {
                setWolfStep('stepX', '+', setWolfSteps)
            } else {
                alert('Game Over')
            }
        } else {
            setWolfStep('stepY', '+', setWolfSteps)
        }
    }
    if (wolfCoordinates.y === rabbitCoordinates.y) {
        setWolfStep('stepY', '+', setWolfSteps)
    }
}