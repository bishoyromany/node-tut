import { gql } from "@apollo/client";

const GET_BOOKS_QUERY = gql`
  query GetBooks {
    books {
      name
      id
      author {
        name
        id
      }
    }
  }
`;

const GET_AUTHORS_QUERY = gql`
  query getAuthors {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation addBook($name: String!, $genre: String, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
      author {
        name
        age
        id
      }
    }
  }
`;

export { GET_BOOKS_QUERY, GET_AUTHORS_QUERY, ADD_BOOK_MUTATION };
