import React from 'react';

export default function SearchNav({handleInput, search, handleSearch}){
    return(
        <div className="ui menu">
            <div className="ui container">
            <form className="ui center aligned container search-container" onSubmit={handleSearch}>
                <div className="ui icon input">
                <input id="search" type="text" placeholder="Search..." value={search} onChange={handleInput}/>
                <i className="search link icon" onClick={handleSearch}></i>
                </div>
            </form>
            </div>
        </div>
    );
}