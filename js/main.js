import Student from './entities/student.js';
import softwareSystems from './data/info-math/software-systems.js';
import businessAndLaw from './data/eco/business-law.js';
import dataScience from './data/info-math/data-science.js';
import mathematicsAndItsApplications from './data/info-math/mathematics-and-its-applications.js';
import nanoChemistry from './data/chem/nano-chemistry.js';
import odontology from './data/med/odontology.js';
import biochemistry from './data/chem/biochemistry.js';
import meteorologyAndHidrology from './data/chem/meteorology-hidrology.js';
import nursingProgram from './data/med/nursing.js';
import informaticsSystems from './data/info-math/informatics-engineering.js';
import occupationalTherapy from './data/med/occupational-therapy.js';
import pharmacy from './data/med/pharmacy.js';
import medicine from './data/med/medicine.js';
import philosophy from './data/philo/philosophy.js';
import economicsFinance from './data/eco/economics-finance.js';
import bioinformatics from './data/info-math/bioinformatics.js';
import chemistry from './data/chem/chemistry.js';
import managementEnglish from './data/eco/management-english.js';
import informationTechnology from './data/info-math/information-technology.js';

const studentsInfoAndMathSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('KompiuterÄ—', 'KomplailerytÄ—', softwareSystems.id),
];
const studentsInfoAndMathBusinessAndLaw = [
  new Student('Jonas', 'Jonaitelis', businessAndLaw.id),
  new Student('Lukas', 'Liokaitis', businessAndLaw.id),
  new Student('Benas', 'Servetcius', businessAndLaw.id),
  new Student('Lakunas', 'Kopustunas', businessAndLaw.id),
  new Student('Gintaras', 'Ziba', businessAndLaw.id),
];
const studentsInfoAndMathDataScience = [
  new Student('Lina', 'LinaitÄ—', dataScience.id),
  new Student('Asta', 'AstaitÄ—', dataScience.id),
  new Student('Rokas', 'Rokaitis', dataScience.id),
  new Student('Lukas', 'Lukaitis', dataScience.id),
  new Student('Jonas', 'Jonaitis', dataScience.id),
];
const studentsInfoMathematicsAndItsApplications = [
  new Student('Toushaing', 'Dluqum', mathematicsAndItsApplications.id),
  new Student('Esoo', 'Prupia', mathematicsAndItsApplications.id),
  new Student('Dha', 'Adeed', mathematicsAndItsApplications.id),
  new Student('Caxeo', 'Pruvondun', mathematicsAndItsApplications.id),
  new Student('Hawan', 'Baintai', mathematicsAndItsApplications.id),
];
const studentsChemNanoChemistry = [
  new Student('Tomas', 'Ratkauskas', nanoChemistry.id),
  new Student('Ponas', 'BMWas', nanoChemistry.id),
  new Student('Opelis', 'Servisas', nanoChemistry.id),
  new Student('Audi', 'Spaudi', nanoChemistry.id),
  new Student('Voltas', 'Voldemortas', nanoChemistry.id),
];
const studentsOdontology = [
  new Student('Hari', 'Krisna', odontology.id),
  new Student('Maiklas', 'Dziordonas', odontology.id),
  new Student('Vardenis', 'Pavardenis', odontology.id),
  new Student('Agrastas', 'Kaspinuotis', odontology.id),
  new Student('Jageris', 'Maisteris', odontology.id),
];
const studentsChemBiochemistry = [
  new Student('Lina', 'LentautaitÄ—', biochemistry.id),
  new Student('Jurgis', 'Jurgauskas', biochemistry.id),
  new Student('Janina', 'JantlikaitÄ—', biochemistry.id),
  new Student('Eliza', 'KvakauskaitÄ—', biochemistry.id),
  new Student('Ernestas', 'Nevermaidis', biochemistry.id),
];
const studentsChemistry = [
  new Student('Agentas', 'AviÅ¾inis', chemistry.id),
  new Student('ÄŒerpÄ—', 'DraugelÄ—', chemistry.id),
  new Student('MaÅ¾ulis', 'Naktinis', chemistry.id),
  new Student('Drumsta', 'MolytÄ—', chemistry.id),
  new Student('Tupys', 'Å½iedelis', chemistry.id),
];
const studentsChemMeteorologyAndHidrology = [
  new Student('Nemunas', 'Panemunis', meteorologyAndHidrology.id),
  new Student('Ieva', 'DrebulaitÄ—', meteorologyAndHidrology.id),
  new Student('ZosÄ—', 'KalnienÄ—', meteorologyAndHidrology.id),
  new Student('AntosÄ—', 'DraugytÄ—', meteorologyAndHidrology.id),
  new Student('PerkÅ«nas', 'Plonulis', meteorologyAndHidrology.id),
];
const studentsInfoNursingProgram = [
  new Student('Helga', 'NiursaitÄ—', nursingProgram.id),
  new Student('Denera', 'BintytÄ—', nursingProgram.id),
  new Student('Florencija', 'Heterman', nursingProgram.id),
  new Student('Liuteris', 'Solomonas', nursingProgram.id),
  new Student('Voltas', 'Traidenis', nursingProgram.id),
];
const studentsInfoAndMathinformaticsSystems = [
  new Student('Algirdas', 'A', informaticsSystems.id),
  new Student('Saulius', 'S', informaticsSystems.id),
  new Student('Tadas', 'T', informaticsSystems.id),
  new Student('Rima', 'R', informaticsSystems.id),
  new Student('RÅ«ta', 'R', informaticsSystems.id),
];
const studentsOccupationalTherapy = [
  new Student('Antanas', 'Antanaitis', occupationalTherapy.id),
  new Student('Virgis', 'Virgilaitis', occupationalTherapy.id),
  new Student('Jonas', 'Jonaitis', occupationalTherapy.id),
  new Student('Pijus', 'Pijauskas', occupationalTherapy.id),
  new Student('Vidas', 'Vidaitis', occupationalTherapy.id),
];
const studentsMedPharmacy = [
  new Student('Medikas', 'Medikaitis', pharmacy.id),
  new Student('Å virkÅ¡tas', 'Klizmauskas', pharmacy.id),
  new Student('LaÅ¡elinÄ—', 'AdatienÄ—', pharmacy.id),
  new Student('Kateteris', 'Lancetauskas', pharmacy.id),
  new Student('AnalizÄ—', 'KraujauskÄ—', pharmacy.id),
];
const studentsMedicine = [
  new Student('Paulius', 'Kontauskas', medicine.id),
  new Student('Petras', 'Ivanauskas', medicine.id),
  new Student('Robertas', 'Pubsauskas', medicine.id),
  new Student('Jonas', 'Romaitis', medicine.id),
  new Student('Petraitis', 'Jonaitytis', medicine.id),
];
const philosophyStudents = [
  new Student('Antanas', 'Benzinas', philosophy.id),
  new Student('Betonas', 'Kietas', philosophy.id),
  new Student('Tomas', 'Tomauskas', philosophy.id),
  new Student('GertrÅ«da', 'PavardenytÄ—', philosophy.id),
  new Student('VyÅ¡nia', 'BordiÅ«rytÄ—', philosophy.id),
];
const studentsEconomicsFinance = [
  new Student('Kazimira DanutÄ—', 'PrunskienÄ—', economicsFinance.id),
  new Student('Algirdas Mykolas', 'Brazauskas', economicsFinance.id),
  new Student('ÄŒeslovas', 'JurÅ¡Ä—nas', economicsFinance.id),
  new Student('Rolandas', 'Paksas', economicsFinance.id),
  new Student('Irena', 'DegutienÄ—', economicsFinance.id),
];
const studentsBioinformatics = [
  new Student('Liepa', 'LiepaitÄ—', bioinformatics.id),
  new Student('Rasa', 'RasaitÄ—', bioinformatics.id),
  new Student('Jonas', 'Smitas', bioinformatics.id),
  new Student('Regimantas', 'Regis', bioinformatics.id),
  new Student('Montvydas', 'Montvis', bioinformatics.id),
];
const studentsManagementEnglish = [
  new Student('Lina', 'Pakalnyte', managementEnglish.id),
  new Student('Ona', 'Onyskaite', managementEnglish.id),
  new Student('Benas', 'Benauskass', managementEnglish.id),
  new Student('Pavelas', 'Ivanauskas', managementEnglish.id),
  new Student('Julija', 'JulienÄ—', managementEnglish.id),
];
const studentsInformationTechnology =[
  new Student('Algirdas', 'Balandis', informationTechnology.id),
  new Student('Arvydas', 'BalÄ?iÅ«nas', informationTechnology.id),
  new Student('Jaunius', 'Barys', informationTechnology.id),
  new Student('Dovjotas', 'Jaugelas', informationTechnology.id),
  new Student('Dovnoras', 'Viligaila', informationTechnology.id),
];
const studentsInformatics = [
  new Student('Vargas', 'BomÅ¾uolis', informatics.id),
  new Student('Vitalija', 'KatunskytÄ—', informatics.id),
  new Student('Bestuburis', 'NausÄ—da', informatics.id),
  new Student('Vladimiras', 'Zelenskis', informatics.id),
  new Student('Don', 'Kichotas', informatics.id),
];

console.table(studentsInfoAndMathSoftwareSystems);
console.table(studentsInfoAndMathBusinessAndLaw);
console.table(studentsInfoAndMathDataScience);
console.table(studentsInfoMathematicsAndItsApplications);
console.table(studentsChemNanoChemistry);
console.table(studentsOdontology);
console.table(studentsChemBiochemistry);
console.table(studentsChemMeteorologyAndHidrology);
console.table(studentsInfoNursingProgram);
console.table(studentsInfoAndMathinformaticsSystems);
console.table(studentsOccupationalTherapy);
console.table(studentsMedPharmacy);
console.table(studentsMedicine);
console.table(philosophyStudents);
console.table(studentsEconomicsFinance);
console.table(studentsBioinformatics);
console.table(studentsChemistry);
console.table(studentsManagementEnglish);
console.table(studentsInformationTechnology);
console.table(studentsInformatics);
