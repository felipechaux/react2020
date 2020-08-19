
import React, { useState } from "react";

//hook personalizado para manejo de inputs
export const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.value)

    return { value, onChange }
}