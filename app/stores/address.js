import {defineStore } from 'pinia';

export const  useAddress = defineStore('address', {
  state: () => ({
    store_address: [
        {
                     location: 'Angeles, Pampanga',
                    address:  'Unit 1-B2 TL Plaza 191 McArthur Hway Brgy Pulung Bulu, Angeles City',
                    contact: ' 09566777881 / 09083244598 ',
                    schedule: ' Sun-Thur 11 AM to 9 PM,Fri-Sat 11 AM to 10 PM ',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'Don Antornio, Quezon City',
                    address:  'Shell Pook Ligaya, Holy Spirit Drive Corner Ligaya Isidora Hills Subd., Quezon City',
                    contact: ' 09773900945 / 09622538582 ',
                    schedule: ' 11 AM to 9 PM Daily',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'Eton Centris, Quezon City',
                    address:  'JAAM HOUSE OF SUSHI - Eton Centris, Quezon City',
                    contact: ' 09171380362 ',
                    schedule: ' 10 AM to 10 PM Daily ',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery/FOODPANDA'
                },
                {
                    location: 'Farmers Market Cubao, Quezon City',
                    address:  'Farmers Market ,Along Session Road, Cubao, Quezon City',
                    contact: ' 09954307973 ',
                    schedule: ' 11 AM to 9 PM Daily',
                    note: '',
                    transactions: '*Takeout/Delivery/GRABFOOD'
                },
                {
                    location: 'Fiesta Carnival Cubao, Quezon City',
                    address:  'Fiesta Carnival Arcade Araneta Center, Cubao, Quezon City (Beside KFC)',
                    contact: ' 09622538587',
                    schedule: ' 10 AM to 4 AM Daily ',
                    note: 'Online orders last call: 9:00 PM',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'katipunan, Quezon City',
                    address:  '2nd Floor, Regis Center, Katipunan Ave., Quezon City',
                    contact: ' 09202760381/ 09065780918',
                    schedule: ' 10 AM to 9 PM Daily',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'Lilac , Marikina City',
                    address:  '55 Lilac St. Markina Heights Concepcion Dos, Marikina City',
                    contact: ' 09209634957',
                    schedule: ' 11 AM to 9 PM Daily',
                    note: 'Online orders last call: 9:00 PM',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'Rockwell Business Center, Pasig City',
                    address:  'The Rockwell Business Center Meralco CMPD. Oritgas Ave. Ugong, Pasig City 1604( Infront of Medical City - Beside BDO)',
                    contact: ' 09687869503',
                    schedule: '10 AM to 9 PM Daily', 
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'SMDC Air Mall Makati City',
                    address:  'Unit 122-123 Air Mall Cor. Yakal and Malungay St. San Antonio , Makati City',
                    contact: ' 09921049715',
                    schedule: ' 10 AM to 10 PM Daily ',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'Sm Fairview, Quezon City',
                    address:  'Tower 4 | Entrance 5| Ground Floor Landmark: Near Hypermarket, Macao Imperial Tea',
                    contact: ' 09543965360 - Globe , 09644693818 - Smart ',
                    schedule: ' 10 AM to 9 PM Daily ',
                    note: '',
                    transactions: ''
                },
                {
                    location: 'SM Southmall',
                    address:  '2nd Level in Front of Food Court Landmark: H&M 2nd Level',
                    contact: ' ',
                    schedule: 'Mall Hours ',
                    note: '',
                    transactions: '*Dine-in/Takeout Only'
                },
                {
                    location: 'SMDC Sun Residences Mall ',
                    address:  'Espana Blvd., Cor. Mayon St.,Brgy. Sta. Teresita (Florentino), Quezon City',
                    contact: '',
                    schedule: ' 10 AM to 9 PM Daily ',
                    note: '',
                    transactions: ''
                },
                {
                    location: 'Valley Golf Antipolo, Rizal',
                    address:  'Driving Range , Valley Golf,Antipolo City,1840 Rizal',
                    contact: ' 09989898817',
                    schedule: '9 AM to 9 PM Daily ',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery'
                },
                {
                    location: 'Water Fun, Taguig City',
                    address:  'Block 24 Lot 43 EP Housing P2 Pinagsama, Taguig City',
                    contact: ' 09087499592',
                    schedule: ' 11 AM to 10 PM Daily ',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: '*Dine-in/Takeout/Delivery/GrabFood'
                },
                {
                    location: 'Dagupan City',
                    address:  'One Esplanade, Judge Jose De Venecia Extension, Dagupan City',
                    contact: ' 09602894884',
                    schedule: ' 11 AM to 10 PM Daily ',
                    note: 'Online orders last call: 1hr before closing',
                    transactions: ''
                }
    ]}),
})           