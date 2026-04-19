import {defineStore} from 'pinia'


export const useMenu = defineStore ('menu', {
    state: () => ({
        store_menu: [
            {
                platters:{
                    family_platter:{
                        name: 'Family Platter',
                        menu: [
                            'family mixed sushi platter - ₱1999', 'regular sushi boat - ₱1349', 'sushi overload - ₱2499','holiday regular boat - ₱1249', 'party sushi boat - ₱4095', 'holiday party - ₱3999'
                        ]
                    },
                    health_platter: {
                        name: 'Health Platter',
                        menu: [
                            'salmon spicy salad - ₱390',
                            'kani salad - ₱220',
                            'tuna spicy salad - ₱390'
                        ]
                    }
                 } ,
                sushi:{
                    gunkan: {
                        name: 'Gunkan',
                        menu: [
                            'Spicy Salmon Gunkan - ₱350',
                    'Tuna Spicy Gunkan - ₱260',
                    'Salmon & Avocatdo Guncan - ₱250',
                    'Kani Guncan - ₱200',
                    'Ika(Squid) Guncan - ₱250',
                    'Tobiko guncan - ₱220'
                        ]
                    },
                    maki: {
                        name: 'Maki',
                        menu: [
                            'California Maki - ₱200',
                    'Star for all season - ₱320',
                    'Salmon Creamcheese - ₱340',
                    'Red Dragon - ₱300',
                    'Yellow Dradon - ₱380',
                    'Mango Kani - ₱270',
                    'Salmon Spicy - ₱320',
                    'Tuna Spicy - ₱300',
                    'Salmon Aburi - ₱320',
                    'Tuna Aburi - ₱300',
                    'Futo Maki - ₱350',
                    'Smoke Salmon & Tuna - ₱330',
                    'Tempura Maki - ₱330'
                        ]
                    },
                    calamaki_promo: {
                        name: 'Calamaki Promo',
                        menu: [
                            'cali maki 16pcs - ₱380',
                        'cali maki 24pcs - ₱560',
                        'cali maki 32pcs - ₱740',
                        'cali maki 40pcs - ₱920',
                        'cali gyoza - ₱700',
                        'party calimaki 72pcs - ₱1510'
                        ]
                    },
                    nigiri: {                        
                        name: 'Nigiri',
                        menu: [
                            'Salmon Sushi - ₱250',
                            'Tuna Sushi - ₱260',
                            'Salmon Aburi - ₱320',
                            'Tuna Aburi - ₱290',
                            'Ebi Sushi - ₱300',
                            'Tamago - ₱220',
                            'Spicy kani - ₱140'
                        ]
                    },
                    new_series: {
                        name: 'New Series',
                        menu: [
                            'spicy salmon cheesemelt - ₱380',
                            'tempura cheesemelt - ₱380',
                            'philadelpia roll - ₱320',
                            'salmon tartare crispy rice - ₱260',
                            'tuna tartare crispy rice- ₱250',
                            'kani crispy rice- ₱170'
                        ]
                    }
                },
                bowls:{
                    donburi:{
                        name: 'Donburi',
                        menu: ['  Gyudon (regular / spicy) - ₱320',
                        'yakiniku don - ₱320',
                        'oyakodon - ₱290',
                        'katsudon - ₱300',
                        'chicken teriyaki don - ₱280',
                        'tendon - ₱290']
                    },
                    ramen: {
                        name: 'Ramen',
                        menu: [
                            'tonkatsu creamy ramen solo ₱300 - sumo ₱460 (w/2 gyoza)',
                        'miso ramen solo ₱310 - sumo ₱460 (w/2 gyoza)',
                        'shoyu ramen solo ₱280 - sumo ₱440 (w/2 gyza)',
                        'tonkotsu creamy shoyu ramen solo ₱290 - sumo ₱450 (w/ 2 gyza)',
                        'tantanmen ramen spicy solo ₱330 - sumo ₱490 (w/ 2 gyza)',
                        'Anaki Ramen solo - ₱350 and Sumo - ₱510 (w/2 gyoza)',
                        'tonkotsu creamy miso ramen solo ₱310 - sumo ₱470 (w/ 2 gyza)'
                        ]
                    }
                },
                options: {
                    jaam_packed:{
                        name: 'Jaam Packed',
                        menu: ['Salmon jaampacked - ₱490',
                                'Tuna jaampacket - ₱470',
                                'Salmon & Tuna jaampacked - ₱480']
                    },
                    musubi: {
                        name: 'Musubi',
                        menu: [
                            'classic musubi -₱140',
                            'spam teriyaki musubi - ₱190',
                            'spicy spam musubi - ₱190',
                            'spam kimchi musubi - ₱190',
                            'fried spam musubi - ₱210'
                        ]
                    },
                    short_order: {
                        name: 'Short Order',
                        menu: ['Gyoza - ₱180',
                                'Kani Tempura - ₱180',
                                'Ebi Tempura - ₱340',
                                'Chicken Karage - ₱280',
                                'Chachan - ₱170',
                                'Miso soup - ₱50',
                                'Salmon tatakki - ₱380',
                                'tuna tatakki - ₱350'
                            ]
                    },
                    takeout: {
                        name: 'Takeout',
                        menu: [
                            'Mini Salmon Patter - ₱900',
                            'Mini Tuna Platter - ₱750',
                            'Mini mix PLatter - ₱800',
                            'Premium Mixed Bouquet - ₱1650',
                            'Premium Salmon Bouquet - ₱1800',
                            'Premium Salmon Platter - ₱1700',
                            'Premium Tuna Platter - ₱1500',
                            'Premium Mix Platter - ₱1550',
                            'Premium Mix Boat - ₱1600',
                            'Premium Salmon Boat - ₱1750',
                            'Supreme Sashimi - ₱1900',
                            'Salmon Prime Cut - ₱800',
                            'Tuna Prime Cut - ₱730',
                            'Mini Tuna Boquet - ₱500',
                            'Mini Salmon Boquet - ₱600',
                            'Mini Mixed Boquet - ₱550',
                            'Salmon Tray - ₱430',
                            'Tuna Tray - ₱380',
                            'Mixed Tray - ₱400'
                        ]
                    },
                    tempura: {
                        name: 'Tempura',
                        menu: [
                            'Tempura platter - ₱820',
                            'Fiesta Tempura - ₱1780'
                        ]
                    }
                },
                drinks:{
                    non_alcoholic: {
                        name: 'Non-alcohol',
                        menu: [
                            'Coke in can - ₱75',
                            'Sprite in can - ₱75',
                            'Royal in can - ₱75',
                            'Mug Rootbeer in can - ₱75',
                            'Sola in can (any flavor) - ₱75',
                            'Bottled Water - ₱30',
                            'Iced Tea (Pitcher) - ₱120'
                        ]
                    },
                    non_alcoholic:{
                        name: 'Alcohol',
                        menu: [
                            'San Mig Light - ₱120',
                            'San Mig Pale Pilsen - ₱120',
                            'Asahi in can - ₱220',
                            'Sapporo in can - ₱220'
                        ]
                    }
                },
            }
        ]
    })
})