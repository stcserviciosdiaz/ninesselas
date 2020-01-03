import { bailarin } from './bailarin';
import { cantante } from './cantante';
import { coche } from './coche';
import { deportes } from './deportes';
import { deportista } from './deportista';
import { estilosBaile } from './estilosBaile';
import { estilosCanto } from './estilosCanto';
import { etnia } from './etnia';
import { fotosManos } from './fotosManos';
import { fotosTatuajes } from './fotosTatuajes';
import { habilidades } from './habilidades';
import { idiomas } from './idiomas';
import { instrumento } from './instrumentos';
import { moto } from './moto';
import { musico } from './musico';
import { tallas } from './tallas';
import { tipoUsuario } from './tipoUsuario';
import { ultimosTrabajos } from './ultimosTrabajos';

export class Usuario {
  idUser: number;
  avatar: string;
  acento: string;
  altura: string;
  apellidos: string;
  carnetConducir: string;
  codigoPostal: string;
  colorOjos: string;
  colorPelo: string;
  colorPiel: string;
  curriculumVitae: string;
  direccion: string;
  dniMadre: string;
  dniRepresentante: string;
  dniPadre: string;
  dniUser: string;
  email: string;
  fechaNacimiento: Date;
  libroFamilia: string;
  localidad: string;
  nacionalidad: string;
  nombreArtistico: string;
  nombreCompleto: string;
  nombres: string;
  numeroSeguroSocial: string;
  observaciones: string;
  password: string;
  pathDniMadre: string;
  pathDniPadre: string;
  pathDniUser: string;
  pathDniRepresentante: string;
  pathSeguroSocial: string;
  provincia: string;
  sexo: string;
  telefono: string;
  telefonoMadre: string;
  telefonoPadre: string;
  lugarNacimiento: string;
  edad: number;
  actor: string;
  username: string;
  videobook: string;
  instrumentoList: instrumento[];
  estilosCantoList: estilosCanto[];
  deporteList: deportes[];
  estiloBaileList: estilosBaile[];
  idiomasList: idiomas[];
  habilidadesList: habilidades[];
  tallasList: tallas[];
  ultimosTrabajosList: ultimosTrabajos[];
  idCantante: cantante;
  idBailarin: bailarin;
  idEtnia: etnia;
  idType: tipoUsuario;
  idDeportista: deportista;
  idMusico: musico;
  motoList: moto[];
  cocheList: coche[];
  fotosTatuajesList: fotosTatuajes[];
  fotosManosList: fotosManos[];




}