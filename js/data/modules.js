import { softwareSystemsModules } from './info-math/software-systems.js';
import { mathematicsAndItsApplicationsModules } from './info-math/mathematics-and-its-applications.js';
import { dataScienceModules } from './info-math/data-science.js';
<<<<<<< HEAD
import { economicsAndBusinessModules } from "./eco/business-law.js";
import { nanoChemistryModules} from './chem/nano-chemistry.js';
import { medicinesModules } from './mmedicine/medicine.js';

  const modules = [
    ...softwareSystemsModules,
    ...dataScienceModules,
    ...economicsAndBusinessModules,
    ...mathematicsAndItsApplicationsModules,
    ...nanoChemistryModules,
    ...medicinesModules,
=======
import { economicsAndBusinessModules } from './eco/business-law.js';
import { nanoChemistryModules } from './chem/nano-chemistry.js';
import { odontologyModules } from './med/odontology.js';
import { biochemistryModules } from './chem/biochemistry.js';
import { meteorologyAndHidrologyModules } from './chem/meteorology-hidrology.js';
import { nursingProgramModules } from './med/nursing.js';


const modules = [
  ...softwareSystemsModules,
  ...mathematicsAndItsApplicationsModules,
  ...dataScienceModules,
  ...economicsAndBusinessModules,
  ...nanoChemistryModules,
  ...odontologyModules,
  ...biochemistryModules,
  ...meteorologyAndHidrologyModules,
  ...nursingProgramModules,
>>>>>>> master
];

export default modules;
