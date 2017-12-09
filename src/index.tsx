import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { StoreState } from './types';
import { listUsers } from './reducers';
import { Provider } from 'react-redux';
import ListUsers from './containers/ListUsers';

const store = createStore<StoreState>(listUsers, {
  'users': [
    {
      'id': 0,
      'firstName': 'Aniyah',
      'lastName': 'Luettgen',
      'phone': '861-332-5113',
      'email': 'Danika.Ryan84@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 1,
      'firstName': 'Alisa',
      'lastName': 'Pacocha',
      'phone': '085-056-3901',
      'email': 'Eusebio68@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 2,
      'firstName': 'Korey',
      'lastName': 'Lemke',
      'phone': '325-087-1886',
      'email': 'Burnice.Grimes55@gmail.com',
      'role': 'regular'
    },
    {
      'id': 3,
      'firstName': 'Darren',
      'lastName': 'Christiansen',
      'phone': '845-191-7505',
      'email': 'Alfonso28@gmail.com',
      'role': 'regular'
    },
    {
      'id': 4,
      'firstName': 'Hank',
      'lastName': 'Zulauf',
      'phone': '587-754-2170',
      'email': 'Marietta.Huels@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 5,
      'firstName': 'Eric',
      'lastName': 'Bayer',
      'phone': '125-043-0868',
      'email': 'Zula62@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 6,
      'firstName': 'Myrl',
      'lastName': 'Mills',
      'phone': '964-404-5615',
      'email': 'Lisa.Anderson@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 7,
      'firstName': 'Leopoldo',
      'lastName': 'Hartmann',
      'phone': '650-295-0270',
      'email': 'Katelyn_Braun@gmail.com',
      'role': 'regular'
    },
    {
      'id': 8,
      'firstName': 'Edgardo',
      'lastName': 'Marks',
      'phone': '820-102-8959',
      'email': 'Kariane.Weissnat39@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 9,
      'firstName': 'Leopold',
      'lastName': 'Kuhn',
      'phone': '272-988-6824',
      'email': 'Forrest_Hackett@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 10,
      'firstName': 'Moriah',
      'lastName': 'Kuhn',
      'phone': '467-000-4459',
      'email': 'Lisa92@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 11,
      'firstName': 'Gerson',
      'lastName': 'Littel',
      'phone': '866-767-9673',
      'email': 'Ken_VonRueden@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 12,
      'firstName': 'Abigale',
      'lastName': 'Mitchell',
      'phone': '285-053-8632',
      'email': 'Mina_Prohaska@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 13,
      'firstName': 'Brannon',
      'lastName': 'Konopelski',
      'phone': '267-541-2655',
      'email': 'Elisa40@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 14,
      'firstName': 'Jasmin',
      'lastName': 'Watsica',
      'phone': '591-674-4319',
      'email': 'Nelda_McLaughlin@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 15,
      'firstName': 'Delores',
      'lastName': 'Metz',
      'phone': '712-495-3683',
      'email': 'Wilber1@gmail.com',
      'role': 'regular'
    },
    {
      'id': 16,
      'firstName': 'Javier',
      'lastName': 'Hartmann',
      'phone': '024-209-5327',
      'email': 'Cleta8@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 17,
      'firstName': 'Dashawn',
      'lastName': 'Sipes',
      'phone': '462-164-4740',
      'email': 'Cheyenne.Wisoky@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 18,
      'firstName': 'Prudence',
      'lastName': 'Pagac',
      'phone': '591-004-9213',
      'email': 'Elsa55@gmail.com',
      'role': 'regular'
    },
    {
      'id': 19,
      'firstName': 'Nico',
      'lastName': 'Adams',
      'phone': '704-273-3888',
      'email': 'Clemmie_Ledner@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 20,
      'firstName': 'Cyrus',
      'lastName': 'Wilkinson',
      'phone': '110-543-8664',
      'email': 'Clair_Kunze13@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 21,
      'firstName': 'Ward',
      'lastName': 'Mante',
      'phone': '982-979-7676',
      'email': 'Green_Farrell@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 22,
      'firstName': 'Hillard',
      'lastName': 'Maggio',
      'phone': '076-986-1837',
      'email': 'Clark.Moore41@gmail.com',
      'role': 'admin'
    },
    {
      'id': 23,
      'firstName': 'Emmanuel',
      'lastName': 'Leuschke',
      'phone': '674-036-4712',
      'email': 'Frida_Gaylord@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 24,
      'firstName': 'Katherine',
      'lastName': 'Auer',
      'phone': '046-599-1232',
      'email': 'Skyla.Price@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 25,
      'firstName': 'Wade',
      'lastName': 'Gottlieb',
      'phone': '575-903-3696',
      'email': 'Arden_Schimmel@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 26,
      'firstName': 'Magdalena',
      'lastName': 'West',
      'phone': '062-968-9613',
      'email': 'Laron.Nitzsche@gmail.com',
      'role': 'admin'
    },
    {
      'id': 27,
      'firstName': 'Cameron',
      'lastName': 'Williamson',
      'phone': '894-234-0082',
      'email': 'Johnathan80@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 28,
      'firstName': 'Micheal',
      'lastName': 'Cruickshank',
      'phone': '525-422-8477',
      'email': 'Damion90@gmail.com',
      'role': 'regular'
    },
    {
      'id': 29,
      'firstName': 'Jocelyn',
      'lastName': 'Hermiston',
      'phone': '168-593-3496',
      'email': 'Reed_Ondricka70@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 30,
      'firstName': 'Jaylon',
      'lastName': 'Becker',
      'phone': '571-150-4798',
      'email': 'Evelyn48@gmail.com',
      'role': 'admin'
    },
    {
      'id': 31,
      'firstName': 'Margret',
      'lastName': 'Flatley',
      'phone': '649-166-4302',
      'email': 'Cathrine35@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 32,
      'firstName': 'Yvonne',
      'lastName': 'Bailey',
      'phone': '519-357-3363',
      'email': 'Amber_Lynch@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 33,
      'firstName': 'Ryleigh',
      'lastName': 'Ebert',
      'phone': '627-412-5688',
      'email': 'Peggie8@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 34,
      'firstName': 'Roberto',
      'lastName': 'Thompson',
      'phone': '756-579-7679',
      'email': 'Scottie.Dach@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 35,
      'firstName': 'Marta',
      'lastName': 'Frami',
      'phone': '031-673-4984',
      'email': 'Ashlynn99@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 36,
      'firstName': 'Maverick',
      'lastName': 'Ritchie',
      'phone': '462-966-5650',
      'email': 'Yessenia95@gmail.com',
      'role': 'regular'
    },
    {
      'id': 37,
      'firstName': 'Zachery',
      'lastName': 'Harris',
      'phone': '020-129-3176',
      'email': 'Rylan5@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 38,
      'firstName': 'Miguel',
      'lastName': 'Marquardt',
      'phone': '965-263-8624',
      'email': 'Brando5@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 39,
      'firstName': 'Delilah',
      'lastName': 'Metz',
      'phone': '283-211-4747',
      'email': 'Kristy10@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 40,
      'firstName': 'Tabitha',
      'lastName': 'McGlynn',
      'phone': '176-164-8487',
      'email': 'Susie.Ondricka@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 41,
      'firstName': 'Jocelyn',
      'lastName': 'Marvin',
      'phone': '244-931-6605',
      'email': 'Alayna_Gaylord@gmail.com',
      'role': 'admin'
    },
    {
      'id': 42,
      'firstName': 'Jenifer',
      'lastName': 'Ernser',
      'phone': '265-226-2753',
      'email': 'Lourdes_Denesik@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 43,
      'firstName': 'Neil',
      'lastName': 'Bradtke',
      'phone': '361-157-4622',
      'email': 'Fern.McDermott89@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 44,
      'firstName': 'Assunta',
      'lastName': 'Senger',
      'phone': '639-652-7432',
      'email': 'Lavern38@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 45,
      'firstName': 'Jaydon',
      'lastName': 'Hegmann',
      'phone': '428-032-6633',
      'email': 'Adonis_Adams9@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 46,
      'firstName': 'Tia',
      'lastName': 'Grady',
      'phone': '574-137-2133',
      'email': 'Laisha.Ullrich@gmail.com',
      'role': 'regular'
    },
    {
      'id': 47,
      'firstName': 'Uriah',
      'lastName': 'Wilkinson',
      'phone': '714-058-5224',
      'email': 'Merlin.Bechtelar@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 48,
      'firstName': 'Mallie',
      'lastName': 'Gulgowski',
      'phone': '581-100-1550',
      'email': 'Myrtis.Johns63@gmail.com',
      'role': 'regular'
    },
    {
      'id': 49,
      'firstName': 'Clemmie',
      'lastName': 'McCullough',
      'phone': '643-125-0746',
      'email': 'Kasandra.Ward@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 50,
      'firstName': 'Korbin',
      'lastName': 'McGlynn',
      'phone': '674-815-3209',
      'email': 'Garland_Muller47@gmail.com',
      'role': 'regular'
    },
    {
      'id': 51,
      'firstName': 'Eldridge',
      'lastName': 'Bauch',
      'phone': '577-045-1856',
      'email': 'Chandler.Roob33@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 52,
      'firstName': 'Dominique',
      'lastName': 'Dickinson',
      'phone': '256-518-7376',
      'email': 'Breanne_Bruen@gmail.com',
      'role': 'admin'
    },
    {
      'id': 53,
      'firstName': 'Buford',
      'lastName': 'Brown',
      'phone': '689-237-2360',
      'email': 'Mertie51@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 54,
      'firstName': 'Avery',
      'lastName': 'Greenholt',
      'phone': '514-236-2601',
      'email': 'Eric57@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 55,
      'firstName': 'Maxine',
      'lastName': 'Toy',
      'phone': '345-370-1201',
      'email': 'Ned_Beer@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 56,
      'firstName': 'Werner',
      'lastName': 'Kuvalis',
      'phone': '874-236-7781',
      'email': 'Kiel_Johnson@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 57,
      'firstName': 'Andres',
      'lastName': 'Rosenbaum',
      'phone': '798-231-9448',
      'email': 'Emilie_Okuneva60@gmail.com',
      'role': 'regular'
    },
    {
      'id': 58,
      'firstName': 'Valentin',
      'lastName': 'Hessel',
      'phone': '506-708-1114',
      'email': 'Adrien_Fahey55@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 59,
      'firstName': 'Felipa',
      'lastName': 'Wyman',
      'phone': '778-760-3338',
      'email': 'Dina42@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 60,
      'firstName': 'Braxton',
      'lastName': 'Sauer',
      'phone': '438-672-8721',
      'email': 'Shanny.Tromp85@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 61,
      'firstName': 'Rosalyn',
      'lastName': 'Lowe',
      'phone': '702-358-5304',
      'email': 'Birdie.Bernier59@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 62,
      'firstName': 'Hunter',
      'lastName': 'Kemmer',
      'phone': '581-424-2760',
      'email': 'Wilma_Krajcik@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 63,
      'firstName': 'Travon',
      'lastName': 'Grant',
      'phone': '473-037-7274',
      'email': 'Gideon55@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 64,
      'firstName': 'Elouise',
      'lastName': 'Gerlach',
      'phone': '272-511-7930',
      'email': 'Willis.Herzog9@gmail.com',
      'role': 'admin'
    },
    {
      'id': 65,
      'firstName': 'Ariane',
      'lastName': 'Farrell',
      'phone': '071-264-0838',
      'email': 'Arnold28@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 66,
      'firstName': 'Colton',
      'lastName': 'Reinger',
      'phone': '497-275-9320',
      'email': 'Ayla70@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 67,
      'firstName': 'Vinnie',
      'lastName': 'Nader',
      'phone': '566-927-1192',
      'email': 'Reece_Nikolaus@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 68,
      'firstName': 'Arnold',
      'lastName': 'Littel',
      'phone': '879-562-1129',
      'email': 'Yvette.Zboncak59@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 69,
      'firstName': 'Ron',
      'lastName': 'Macejkovic',
      'phone': '279-301-2614',
      'email': 'Daren_Hettinger31@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 70,
      'firstName': 'Ferne',
      'lastName': 'Fadel',
      'phone': '511-978-2838',
      'email': 'Aisha87@gmail.com',
      'role': 'admin'
    },
    {
      'id': 71,
      'firstName': 'Harry',
      'lastName': 'Reilly',
      'phone': '772-712-5550',
      'email': 'Ashly.Okuneva@gmail.com',
      'role': 'admin'
    },
    {
      'id': 72,
      'firstName': 'Elody',
      'lastName': 'Kessler',
      'phone': '085-711-6047',
      'email': 'Eudora_Willms21@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 73,
      'firstName': 'Lacy',
      'lastName': 'Sporer',
      'phone': '583-849-9199',
      'email': 'Fausto_Stokes74@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 74,
      'firstName': 'Madelyn',
      'lastName': 'Langworth',
      'phone': '289-743-4860',
      'email': 'Herminio_Bradtke2@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 75,
      'firstName': 'Katelyn',
      'lastName': 'Mueller',
      'phone': '331-000-3728',
      'email': 'Tyrique_Runolfsdottir@gmail.com',
      'role': 'regular'
    },
    {
      'id': 76,
      'firstName': 'Abdul',
      'lastName': 'Kuhlman',
      'phone': '777-636-4667',
      'email': 'Camylle91@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 77,
      'firstName': 'Jeffry',
      'lastName': 'Mohr',
      'phone': '223-084-3640',
      'email': 'Sven.Ziemann88@gmail.com',
      'role': 'regular'
    },
    {
      'id': 78,
      'firstName': 'Kaitlyn',
      'lastName': 'Hegmann',
      'phone': '964-938-5723',
      'email': 'Zula53@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 79,
      'firstName': 'Rickey',
      'lastName': 'Mills',
      'phone': '798-650-5198',
      'email': 'Freda32@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 80,
      'firstName': 'Janiya',
      'lastName': 'Harber',
      'phone': '957-618-7922',
      'email': 'Hillary52@gmail.com',
      'role': 'regular'
    },
    {
      'id': 81,
      'firstName': 'Makenzie',
      'lastName': 'Durgan',
      'phone': '250-794-5432',
      'email': 'Jacques.Zieme78@gmail.com',
      'role': 'regular'
    },
    {
      'id': 82,
      'firstName': 'Modesta',
      'lastName': 'Kirlin',
      'phone': '787-289-7141',
      'email': 'Grant.Luettgen@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 83,
      'firstName': 'Ursula',
      'lastName': 'Robel',
      'phone': '138-135-4309',
      'email': 'Birdie.Kertzmann55@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 84,
      'firstName': 'Kaylee',
      'lastName': 'Stokes',
      'phone': '993-118-1434',
      'email': 'Patsy_Balistreri@gmail.com',
      'role': 'admin'
    },
    {
      'id': 85,
      'firstName': 'Kayli',
      'lastName': 'Weissnat',
      'phone': '331-032-6869',
      'email': 'Georgiana_OHara@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 86,
      'firstName': 'Caleigh',
      'lastName': 'Haley',
      'phone': '553-750-2486',
      'email': 'Rebeka.Greenfelder@gmail.com',
      'role': 'admin'
    },
    {
      'id': 87,
      'firstName': 'Melyna',
      'lastName': 'Welch',
      'phone': '795-349-9851',
      'email': 'Baby6@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 88,
      'firstName': 'Sven',
      'lastName': 'Johns',
      'phone': '872-606-8063',
      'email': 'Adah.Lind@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 89,
      'firstName': 'Mathilde',
      'lastName': 'Maggio',
      'phone': '424-198-1077',
      'email': 'Candelario_Bosco@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 90,
      'firstName': 'Emil',
      'lastName': 'Kuhic',
      'phone': '409-261-7284',
      'email': 'Elaina15@gmail.com',
      'role': 'regular'
    },
    {
      'id': 91,
      'firstName': 'Rosalyn',
      'lastName': 'Stamm',
      'phone': '178-327-0129',
      'email': 'Heaven73@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 92,
      'firstName': 'Webster',
      'lastName': 'Murphy',
      'phone': '958-039-4664',
      'email': 'Amir_DuBuque45@yahoo.com',
      'role': 'regular'
    },
    {
      'id': 93,
      'firstName': 'Valentin',
      'lastName': 'Kulas',
      'phone': '818-611-1846',
      'email': 'Cordell_Swaniawski42@gmail.com',
      'role': 'regular'
    },
    {
      'id': 94,
      'firstName': 'Lavina',
      'lastName': 'Wilkinson',
      'phone': '039-353-1515',
      'email': 'Benton.Cummerata90@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 95,
      'firstName': 'Rogers',
      'lastName': 'Thiel',
      'phone': '803-394-3671',
      'email': 'Kayli_Armstrong84@hotmail.com',
      'role': 'regular'
    },
    {
      'id': 96,
      'firstName': 'Johnson',
      'lastName': 'Dach',
      'phone': '197-518-2870',
      'email': 'Haley_Stiedemann@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 97,
      'firstName': 'Sydnee',
      'lastName': 'Mayert',
      'phone': '404-420-3645',
      'email': 'Shaina_Murray47@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 98,
      'firstName': 'Pearlie',
      'lastName': 'White',
      'phone': '716-059-7466',
      'email': 'Luz.Weber@hotmail.com',
      'role': 'admin'
    },
    {
      'id': 99,
      'firstName': 'Harmon',
      'lastName': 'Willms',
      'phone': '515-442-5884',
      'email': 'Mohamed_Gorczany@hotmail.com',
      'role': 'regular'
    }
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <ListUsers/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
