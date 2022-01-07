import { render } from "@testing-library/react"; 
import App from "./App"
import React from "react"

test("renders an h1", () => {
    const {getByText} = render(<App />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const h1 = getByText(/Ao/)
    expect(h1).toHaveTextContent("Ao")
})