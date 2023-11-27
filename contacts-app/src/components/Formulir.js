import { useRef } from 'react';

export default function Formulir(){
    let ref = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = ref.current.value;
        alert(value);
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label className='nama'>Nama:</label>
                <input type="text" id="nama" name="nama" ref={ref} required />
                <button>Submit</button>
            </form>
        </div>
    )
}