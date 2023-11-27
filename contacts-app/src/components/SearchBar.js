import React from 'react';
import axios from 'axios';

export default function SearchBar(){

    const [search, setSearch] = React.useState("");

    function handleInputSearch(e){
        setSearch(e.target.value);
    }

    function handleSearchClick(){
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=IZblGqCEG8J1700i28S41CW-I1BIv3yPoYcXT9DUhhs`)
            .then(function (response) {
                console.log(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return(
    <div className="ui icon input">
        <input id="search" type="text" placeholder="Search..." value={search} onChange={handleInputSearch}/>
        <i className="search link icon" onClick={handleSearchClick}></i>
    </div>
    );
}