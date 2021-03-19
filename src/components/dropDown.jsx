import React, { memo } from 'react'

import styled from 'styled-components'

const DropDown = memo(({ options, setSelectedMapSizes }) => {

    return (
        <DropDownWrapper>
            <select onChange={event => setSelectedMapSizes(prevState => prevState = event.target.value)}>
                {options.map(el => {
                    return <option value={el.value} key={el._id}>{el.label}</option>
                })}
            </select>
        </DropDownWrapper>
    )
})


export default DropDown

const DropDownWrapper = styled.div`
    margin-right: 20px;
`