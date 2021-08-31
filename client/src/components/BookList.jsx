import React from "react";
import {gql, useQuery} from "@apollo/client";

const GET_PAGE_QUERY = gql`
    query GetPage($id: ID){
        books{
            name
            id
            author{
                name
                id
            }
        }

        authors{
            name
            id
            books{
                name
                id
            }
        }


        book(id: $id){
            name
            id
            author{
                name
                id
            }
        }
    }

`;

const BookList = ({id}) => {
    const { loading, error, data } = useQuery(GET_PAGE_QUERY, {
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
                <li>
                    {data.book.id}
                </li>
                {
                    data.books.map(book => {
                        return <li key={book.id}>Book Name: {book.name}</li>
                    })
                }
                {
                    data.authors.map(author => {
                        return <li key={author.id}>Author Name: {author.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default BookList;