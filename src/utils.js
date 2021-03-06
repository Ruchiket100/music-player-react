import {v4 as uuidv4} from 'uuid'
function chillHop(){
    return([
        {name: 'Indian Summer Rally',
        artist: 'oddfish, cocabona',
        cover: 'https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg',
        color:['#946760', '#E9CE77'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=32863',
        active: true,
        id: uuidv4()
        },
        {
            name: 'Caramel' ,
            artist: 'Leavv',
            cover: 'https://chillhop.com/wp-content/uploads/2022/03/d47e340cee0956dd4457620a97e4a9df7f849ddb-1024x1024.jpg',
            color:['#DFBA02','#D13A53'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=34162',
            active: false,
            id: uuidv4()
            
        },
        {
            name: 'Parasol',
            artist: 'Plusma, Guillaume Muschalle',
            cover: 'https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg',
            color: ['#113144','#FFFFC9'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=28901',
            active: false,
            id: uuidv4()
        },
        {
            name: 'Ending',
            artist: 'Relyae, sadtoi',
            cover: 'https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg',
            color: ['#A5D3A3','#71588A'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=28969',
            active: false,
            id: uuidv4()
        },
        {
            name: 'Polaroid',
            artist: 'Makzo, Mama Aiuto',
            cover: 'https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg',
            color: ['#86A0AD','#B6D1DB'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=24767',
            active: false,
            id: uuidv4()
        },
        {
            name: 'Chit Chat',
            artist: 'Middle School',
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
            color: ['#C76945','#1C384E'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22934',
            active: false,
            id: uuidv4()
        },
        {
            name: 'Vitamin D',
            artist: 'fantompower',
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg',
            color: ['#D9B2D9','#E2EAE1'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22790',
            active: false,
            id: uuidv4()
        },
        {
            name: 'travelbag',
            artist: 'mommy, Sleepy Fish',
            cover: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
            color: ['#F3D5CC','#AFC2D1'],
            audio:'https://mp3.chillhop.com/serve.php/?mp3=19058',
            active: false,
            id: uuidv4()
        }
    ])
}

export default chillHop;

// {
//     name: '',
//     artist: '',
//     cover: '',
//     color: ['',''],
//     audio:'',
//     active: false
// }