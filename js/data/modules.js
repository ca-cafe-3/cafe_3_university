import { softwareSystemsModules } from './info-math/software-systems.js';
import { mathematicsAndItsApplicationsModules } from './info-math/mathematics-and-its-applications.js';
import { dataScienceModules } from './info-math/data-science.js';
import { economicsAndBusinessModules } from "./eco/business-law.js";
import { nanoChemistryModules} from './chem/nano-chemistry.js';
import { odontologyModules } from './med/odontology.js';
import { biochemistryModules } from './chem/biochemistry.js';
import { meteorologyAndHidrologyModules } from './chem/meteorology-hidrology.js';
import { nursingProgramModules } from './med/nursing.js';
import { informaticsSystemsModules } from './info-math/informatics-engineering.js';
import { occupationalTherapyModules } from './med/occupational-therapy.js';
import { managementEnglishModules } from './eco/management-english.js';

const modules = [
  ...softwareSystemsModules,
  ...dataScienceModules,
  ...economicsAndBusinessModules,
  ...mathematicsAndItsApplicationsModules,
  ...nanoChemistryModules,
  ...odontologyModules,
  ...biochemistryModules,
  ...meteorologyAndHidrologyModules,
  ...nursingProgramModules,
  ...informaticsSystemsModules,
  ...occupationalTherapyModules,
  ...managementEnglishModules,
];

export default modules;
