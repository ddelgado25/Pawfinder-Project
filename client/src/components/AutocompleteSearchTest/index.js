import TextInput from 'react-autocomplete-input';
import { useState } from 'react';
function Autocomplete() {
    const [options, setOptions] = useState(["Golden Retriever", "French Bulldog", "Yorkshire Terrier", "Beagle", "Pitbull"])

    function handleRequestOptions(part) {
        console.log(part);          // -> "ap", which is part after trigger "@"
        setOptions({ ...options });
    }

    return (
        <TextInput trigger={["", "@"]} onRequestOptions={handleRequestOptions} options={options} />)
}

export default Autocomplete;