import { gql } from '@apollo/client';

const GET_MY_DETAILS = gql`
  query {
    instructorMe {
      _id
      username
      email
    }
  }
`;

export { GET_MY_DETAILS };
