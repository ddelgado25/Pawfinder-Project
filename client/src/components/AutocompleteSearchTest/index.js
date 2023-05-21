import TextInput from 'react-autocomplete-input';
import { useState } from 'react';
function Autocomplete() {
    const [options, setOptions] = useState(["English Shepherd", "Pitbull"])

    function handleRequestOptions(part) {
        console.log(part);          // -> "ap", which is part after trigger "@"
        setOptions({ ...options });
    }

    return (
        <TextInput trigger={["", "@"]} onRequestOptions={handleRequestOptions} options={options} />)
}

export default Autocomplete;