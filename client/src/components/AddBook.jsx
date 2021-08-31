import React, {useState} from "react";
import {useQuery, useMutation} from "@apollo/client";
import {GET_AUTHORS_QUERY, ADD_BOOK_MUTATION} from "./../queries/queries";

const AddBook = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    
    const {loading , error, data} = useQuery(GET_AUTHORS_QUERY);
    
    const [addBook, addBookStatus] = useMutation(ADD_BOOK_MUTATION);

    let options;

    if(loading){
        return (<h3>Loading</h3>);
    }
    
    if(error){
        return (<h3>Error</h3>);
    }

    if(data && data.authors){
        options = data.authors.map(author => (
            <option value={author.id} key={author.id}>{author.name}</option>
        ))
    }

    if(addBookStatus.loading) return "Adding Book "+ name;

    const add = (e) => {
        e.preventDefault();
        addBook({variables: {name, genre, authorId}});
        console.log(name, genre, authorId);
    }

    return(
        <form id="AddBook" onSubmit={add}>
            <div className="field">
                <label htmlFor="name">Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label htmlFor="genre">Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label htmlFor="genre">Author:</label>
                <select name="authorId" id="authorId" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select Author</option>
                    {options}
                </select>
            </div>

            <button>Add Book</button>
        </form>
    );
}

export default AddBook;