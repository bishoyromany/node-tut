import React from "react";
import {gql, useQuery} from "@apollo/client";

const GET_BOOKS_QUERY = gql`
    query GetBooks{
        books{
            name
            id
        }
    }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
    
    
    if (loading){
        return <p>Loading...</p>;
    };

    if (error){
        return <p>Error.</p>;
    };

    console.log(loading, error, data);

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