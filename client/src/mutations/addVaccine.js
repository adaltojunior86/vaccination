import gql from 'graphql-tag';

export default gql`
  mutation addVaccine($title: String!, $description: String!, $doseType: DoseType! ) {
    addVaccine(title: $title, description: $description, doseType: $doseType){
      title,
      description,
      doseType
    }
  }
`;