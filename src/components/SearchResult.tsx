import React, { FC } from 'react';
import MaterialTable from 'material-table';

const data = [
    {name: "test1"},
    {name: "test2"}
]

const columns = [
    {
        title: "Test Field",
        field: "name"
    }
]

type Props = {
    data: []
}

const SearchResult: FC<Props> = (props) => {
    return (
        <MaterialTable title="test result" data={data} columns={columns} options={{ search: false}} />
    );
};

export default SearchResult;
