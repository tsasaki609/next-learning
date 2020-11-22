import React, { FC } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const searchFromUpdate = data => console.log(data);

type Props = {

}

const Search: FC<Props> = props => {
    return(
        <>
            <SearchForm update={searchFromUpdate} />
            <SearchResult />
        </>
    );
}

export default Search;
