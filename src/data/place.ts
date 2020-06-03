import { place } from '../models/place.entity';

export const PLACE: place[] = JSON.parse(`[
    {
        "id": 1,
		"name": "Varadero Restaurante",
		"description": "Almuerzo, Cena",
        "direction": "Cr 11 16-49 Centro",
		"email": "Varadero@gmail.com",
		"phone": "+57 5 5706157",
        "state": "D",
        "idubications": 1,
        "idtestablish": 1
    },
    {
        "id": 2,
		"name": "Restaurante Bar Compae Chipuco",
		"description": "City Tour Panorámico Valledupar",
        "direction": "Carrera 6 #16-05",
		"email": "BarCompae@gmail.com",
		"phone": "+57 5 5805635",
        "state": "D",
        "idubications": 2,
        "idtestablish": 1
    },
    {
        "id": 3,
		"name": "Riders bike bistro",
		"description": "Apto para vegetarianos",
        "direction": "Calle 13 No. 6-45 Parque Novalito",
		"email": "Riders@gmail.com",
		"phone": "+57 323 4604230",
        "state": "D",
        "idubications": 3,
        "idtestablish": 1
    },
    {
        "id": 4,
		"name": "Restaurante Mamankana",
		"description": "Apto para vegetarianos",
        "direction": "Diagonal 10 No. 6N-15 Sonesta Hotel",
		"email": "Mamankana@gmail.com",
		"phone": "+57 5 5748686",
        "state": "D",
        "idubications": 4,
        "idtestablish": 1
    },
    {
        "id": 5,
		"name": "Restaurante Montacarga Cañahuate",
		"description": "Churrasquería, Colombiana",
        "direction": "Carrera , 13B, 8-65",
		"email": "Montacarga@gmail.com",
		"phone": "+57 5 5802458",
        "state": "D",
        "idubications": 5,
        "idtestablish": 1
    },
    {
        "id": 6,
		"name": "Biblioteca Departamental Valledupar",
		"description": "Biblioteca Departamental",
        "direction": "Calle 15 No. 12 A Esquina",
		"email": "Biblioteca@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 6,
        "idtestablish": 2
    },
    {
        "id": 7,
		"name": "Arenas Suárez Iván E",
		"description": "Hospital en Valledupar",
        "direction": "Calle 12 8 - 42 Centro de Negocio Orbe Plaza",
		"email": "Biblioteca@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 7,
        "idtestablish": 3
    },
    {
        "id": 8,
		"name": "Clinica Medicos S.A., Valledupar",
		"description": "Hospital en Valledupar",
        "direction": "Calle 16b # 10-28 Barrio Loperena",
		"email": "Medicos@gmail.com",
		"phone": "5704747",
        "state": "D",
        "idubications": 8,
        "idtestablish": 3
    },
    {
        "id": 9,
		"name": "Instituto Cardiovascular Del Cesar",
		"description": "Instituto Cardiovascular",
        "direction": "Calle 16 Numero 15-15 Barrio Alfonso Loprez",
		"email": "Cardiovascular@gmail.com",
		"phone": "5715005",
        "state": "D",
        "idubications": 9,
        "idtestablish": 3
    },
    {
        "id": 10,
		"name": "IBienestar Ips S.A.S.",
		"description": "Instituto IBienestar",
        "direction": "Transversal 18 No. 20-46 Local 1 ",
		"email": "IBienestar@gmail.com",
		"phone": "3157204293",
        "state": "D",
        "idubications": 10,
        "idtestablish": 3
    },
    {
        "id": 11,
		"name": "Dusakawi Ips",
		"description": "Instituto Cardiovascular",
        "direction": "Calle 16a # 4 -63 Barrio Garita",
		"email": "IBienestar@gmail.com",
		"phone": "5804440",
        "state": "D",
        "idubications": 11,
        "idtestablish": 3
    },
    {
        "id": 12,
		"name": "Hotel Ucla Center",
		"description": "Hotel Ucla Center se encuentra en Valledupar",
        "direction": "Calle 22c #18a31",
		"email": "Ucla@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 12,
        "idtestablish": 4
    },
    {
        "id": 13,
		"name": "Hampton by Hilton Valledupar",
		"description": "Hotel Hapton servicion de calidad",
        "direction": "Calle 30 # 6 a 133",
		"email": "Hilton@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 13,
        "idtestablish": 4
    },
    {
        "id": 14,
		"name": "Hotel Sicarare",
		"description": "Hotel Sicarare se encuentra en Valledupar",
        "direction": "Carrera 9 # 16 - 04",
		"email": "Sicarare@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 14,
        "idtestablish": 4
    },
    {
        "id": 15,
		"name": "Hotel Valledupar Plaza",
		"description": "Hotel Sicarare se encuentra en Valledupar",
        "direction": "Calle 19 #14-56",
		"email": "Plaza@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 15,
        "idtestablish": 4
    },
    {
        "id": 16,
		"name": "HOTEL BOUTIQUE CALLE GRANDE",
		"description": "HOTEL BOUTIQUE CALLE GRANDE",
        "direction": "CARRERA 7 15-85",
		"email": "BOUTIQUE@gmail.com",
		"phone": "none",
        "state": "D",
        "idubications": 16,
        "idtestablish": 4
    },
    {
        "id": 17,
		"name": "Palenke Cultura Bar",
		"description": "Discotecas y clubes de baile, Bares y discotecas",
        "direction": "Carrera 15 N. 6 - 74 ",
		"email": "Palenke@gmail.com",
		"phone": "+57 315 2354378",
        "state": "D",
        "idubications": 17,
        "idtestablish": 5
    },
    {
        "id": 18,
		"name": "Tierra de Cantores El Bar",
		"description": "Discotecas y clubes de baile, Bares y discotecas",
        "direction": "Carrera 15 N. 6 - 74 ",
		"email": "Cantores@gmail.com",
		"phone": "+57 301 7566162",
        "state": "D",
        "idubications": 18,
        "idtestablish": 5
    },
    {
        "id": 19,
		"name": "La Bodeguita",
		"description": "Bares y discotecas",
        "direction": "Carrera 19 # 10-29 Avenida Los Cortijos",
		"email": "Bodeguita@gmail.com",
		"phone": "+57 301 7566162",
        "state": "D",
        "idubications": 18,
        "idtestablish": 5
    },
    {
        "id": 20,
		"name": "Tlön-Bar",
		"description": "Bares y discotecas",
        "direction": "Calle 15 6 54, Valledupar",
		"email": "Tlon@gmail.com",
		"phone": "+57 300 5237208",
        "state": "D",
        "idubications": 19,
        "idtestablish": 5
    },
    {
        "id": 21,
		"name": "Morena Lounge",
		"description": "Bares y discotecas, Discotecas y clubes de baile",
        "direction": "Carrera 9 7 B-16",
		"email": "Lounge@gmail.com",
		"phone": "+57 317 4293809",
        "state": "D",
        "idubications": 20,
        "idtestablish": 5
    },
    {
        "id": 22,
		"name": "Parque de la Leyenda Vallenata",
		"description": "Monumentos y lugares de interés",
        "direction": "Cra. 7, Valledupar, Cesar",
		"email": "none",
		"phone": "301 2013587",
        "state": "D",
        "idubications": 20,
        "idtestablish": 6
    },
    {
        "id": 23,
		"name": "Iglesia de la Concepcion",
		"description": "Iglesias y catedrales",
        "direction": "Valledupar, Cesar",
		"email": "none",
		"phone": "(5) 5742195",
        "state": "D",
        "idubications": 20,
        "idtestablish": 6
    }



]`)