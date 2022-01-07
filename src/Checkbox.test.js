import { fireEvent, render } from "@testing-library/react"; 
import { Checkbox } from "./Checkbox"
import React from "react"

test("Selecting checkbox", () => {
    const {getByLabelText} = render(<Checkbox />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const checkbox = getByLabelText(/not checked/)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
})