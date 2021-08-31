import React from "react";
import {useQuery} from "@apollo/client";
import {GET_BOOKS_QUERY} from "./../queries/queries";

const BookList = ({id}) => {
    const { loading, error, data } = useQuery(GET_BOOKS_QUERY, {
        variables: {id}
    });
    
    
    if (loading){
        return <p>Loading...</p>;
    };

    if (error){
        return <p>Error.</p>;
    };

    return (
        <div >
            <ul id="BookList">
                {
                    data.books.map(book => {
                        return <li key={book.id}>Book Name: {book.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default BookList;