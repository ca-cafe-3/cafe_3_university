import { softwareSystemsModules } from './info-math/software-systems.js';
import { mathematicsAndItsApplicationsModules } from './info-math/mathematics-and-its-applications.js';
import { dataScienceModules } from './info-math/data-science.js';
import { economicsAndBusinessModules } from "./eco/business-law.js";
import { odontologyModules } from './med/odontology.js';

const modules = [
  ...softwareSystemsModules,
  ...mathematicsAndItsApplicationsModules,
  ...dataScienceModules,
  ...economicsAndBusinessModules,
  ...odontologyModules,
];

export default modules;
