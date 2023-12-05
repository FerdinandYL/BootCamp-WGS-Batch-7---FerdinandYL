import React from 'react';

export default function SearchBar({handleOnClickSearch, handleOnChange, searchState}){
    return(
        <div className="ui secondary menu">
            <div className="ui container" style={{
                margin: '10px'
            }}>
                <div className="ui center aligned container search-container" onSubmit={handleOnClickSearch}>
                    <div className="ui icon input">
                    <input id="search" type="text" placeholder="Search..." value={searchState} onChange={handleOnChange}/>
                    <i className="search link icon" onClick={handleOnClickSearch}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}