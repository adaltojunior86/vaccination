import gql from 'graphql-tag';

export default gql`
{
  getAllVaccines {
    id
    title
  }
}`;
