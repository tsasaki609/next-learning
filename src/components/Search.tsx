import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import React, { FC, useState, useEffect } from 'react';
import useSWR from 'swr';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

type DataSet = {
    name: string
}

type Props = {

}

const appid = "";
const endpoint = `https://map.yahooapis.jp/search/local/V1/localSearch?appid=${appid}&query=`;
// use path build lib?

const fetcher = async name => {
    //TODO call and fetch data
};

const Search: FC<Props> = props => {
    const [name, setName] = useState("");

    const searchFromUpdate = formData => {
        console.log(formData);
        setName(formData.example);
    };

    const { data, error } = useSWR(`${endpoint}/${name}`, () => fetcher(name));
    //update data state

    useEffect(() => {
        console.log("effect exec " + name);
    }, [name]);

    return(
        <>
            <SearchForm update={searchFromUpdate} example={name}/>
            <SearchResult data={[]}/>
        </>
    );
}

export default Search;
