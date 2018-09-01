
import { getVaccineByTitle, getVaccineById, addVaccine, getAllVaccines } from './vaccine';
import { DoseType } from './doseType';
const resolvers = {
  Vaccine:{
    author: () => {} 
  },
  DoseType,
  Query: {
    getVaccineByTitle,
    getVaccineById,
    getAllVaccines
  },
  Mutation: {
    addVaccine
  }
}

export default resolvers;