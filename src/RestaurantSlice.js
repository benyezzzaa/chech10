import { createSlice } from "@reduxjs/toolkit"

export const RestaurantSlice=createSlice(
    {
        name:"restaurent",
        initialState: {
         /*   tasks:[{id:"",description:"",isDone:""}]
          */   list:[ 
                { title :'Chaneb',
                description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
                posterURL:'https://www.digitale-carte-visite.com/wp-content/uploads/2021/11/chaneb-by-bouazra.jpg',
                rating : 3,
                 menuItems : [
                  {
                    name: 'Garlic Bread',
                    image:
                      'https://th.bing.com/th/id/R.ee74650fdba25b382cc6c4e7c2928dc6?rik=W%2b4Glknyv4K8Zg&pid=ImgRaw&r=0',
                    price: 8.99,
                  },
                  {
                    name: 'Mozzarella Sticks',
                    image:
                      'https://th.bing.com/th/id/R.bdc72f52b97f31c46279b9f718046032?rik=YRA%2bjY1Z%2fvrDqg&pid=ImgRaw&r=0',
                    price: 10.99,
                  },
                  {
                    name: 'Bruschetta',
                    image:
                      'https://th.bing.com/th/id/R.8d9eead17c45becc0d1adf66504b1ee4?rik=2UpeD%2bj%2fsruCug&pid=ImgRaw&r=0',
                    price: 7.99,
                  },
                  {
                    name: 'Spaghetti Bolognese',
                    image:
                      'https://th.bing.com/th/id/R.7cd3e827b7b9aa1fc0e4b87c883c8556?rik=Bl1ZpuTXWqRjqg&riu=http%3a%2f%2fwww.cuisineetsentiments.com%2fimages%2fspaghetti-bolognaise_5.jpg&ehk=hSD8jyKbZ8bdSViaWaJ3b1MMVRZl1V6Qu3WBbLV%2bg6E%3d&risl=&pid=ImgRaw&r=0',
                    price: 15.99,
                  },
                  {
                    name: 'Chicken Alfredo',
                    image:
                      'https://th.bing.com/th/id/OIP.IPluMjHEpxF8XNkgKlGsrQHaKX?rs=1&pid=ImgDetMain',
                    price: 12.99,
                  },
                  {
                    name: 'Vegetarian Pizza',
                    image:
                      'https://th.bing.com/th/id/OIP.tYFj3aL2egSQ6wUDI2y_YwHaE8?rs=1&pid=ImgDetMain',
                    price: 18.99,
                  },
                  {
                    name: 'Tiramisu',
                    image:
                      'https://th.bing.com/th/id/OIP.PosNKI7N9aUHI_BmI0uhRAHaHa?w=500&h=500&rs=1&pid=ImgDetMain',
                    price: 6.99,
                  },
                  {
                    name: 'Cheesecake',
                    image:
                      'https://th.bing.com/th/id/OIP.P68JotRqfNNb6c-fVroj4QHaE8?rs=1&pid=ImgDetMain',
                    price: 8.99,
                  },
                  {
                    name: 'Chocolate Fondue',
                    image:
                      'https://th.bing.com/th/id/R.96dcfb30e4b79cf7425c1e6761a3713d?rik=oA9YTgx4V%2f9xzg&pid=ImgRaw&r=0',
                    price: 9.99,
                  },
                ]
            } ,
                {
                  title :'Malibu Space',
                  description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
                  posterURL:'https://th.bing.com/th/id/OIP.I54-IOLLrbNuf9i2QET9UgHaD4?w=345&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  rating : 5,
                  menuItems : [
                    {
                      name: 'kafteji',
                      image:'https://th.bing.com/th/id/R.83a802624f48414aec7f28ef4d8629fa?rik=%2fc1u1L8tqKNPlQ&riu=http%3a%2f%2fdjolo.net%2fwp-content%2fuploads%2f2015%2f03%2f1-8.jpg&ehk=TXF96oYHrLTfyBDwIe8iUoTevlAvXg5hc6ygVCXV%2fyo%3d&risl=&pid=ImgRaw&r=0',
                      price: 8.99,
                    },
                    {
                      name: 'shan tounsi',
                      image:
                        'https://i.pinimg.com/originals/80/10/ed/8010edb3827fa69529bbee747d2b7d57.jpg',
                      price: 10.99,
                    },
                    {
                      name: 'lasagne',
                      image:
                        'https://th.bing.com/th/id/OIP.k5QGf1USwgJJhcE8BoYzBQHaFD?rs=1&pid=ImgDetMain',
                      price: 7.99,
                    },
                    {
                      name: 'sandwitch thon',
                      image:'https://img.mesrecettesfaciles.fr/2019-07/sandwichauthon-16509-1000x500.jpg',
                      price: 15.99,
                    },
                    {
                      name: 'mlewi',
                      image:'https://1.bp.blogspot.com/-O4WLQ4V0Tes/XkfStwVNs3I/AAAAAAAAf3w/3bg4_6EjnEgQEdFZmQVl2SlhB_q4YWGUQCLcBGAsYHQ/w1200-h630-p-k-no-nu/85126481_747050412487076_6918208667560968192_n.jpg',

                      price: 12.99,
                    },
                    {
                      name: 'Piza',
                      image:
                        'https://th.bing.com/th/id/OIP.tYFj3aL2egSQ6wUDI2y_YwHaE8?rs=1&pid=ImgDetMain',
                      price: 18.99,
                    },
                    {
                      name: 'plat escalope',
                      image:'https://thumbs.dreamstime.com/b/plat-d-escalope-de-veau-et-de-pommes-frites-87430745.jpg',
                      price: 6.99,
                    },
                    {
                      name: 'plat mixte',
                      image:'https://th.bing.com/th/id/R.ec41c0636a06a313a9901697b592bf01?rik=hqkA1c26poMHjA&pid=ImgRaw&r=0&sres=1&sresct=1',

                      price: 8.99,
                    },
                    {
                      name: 'chapati',
                      image:'https://www.plurielle.ma/wp-content/uploads/2020/05/chapatis.png',
                      price: 9.99,
                    },
                  ]
              },
              {
                title :'Restaurant La Gondole',
                description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
                posterURL:'https://th.bing.com/th/id/R.feec48dad1551d3e75c7ddce8f5a01ed?rik=sASaEdtOsrGnKQ&pid=ImgRaw&r=0',
                rating : 5,
                menuItems: [
                  {
                    name: 'Tajin',
                    image:'https://th.bing.com/th/id/R.f47b55af2ecb7ca9c26682281dc81780?rik=Ya%2bhyzSI9KPZiA&riu=http%3a%2f%2ftheblog.lamegara.com%2fwp-content%2fuploads%2f2017%2f03%2ftajine-370x247.jpg&ehk=i4682feieaFIuEie8EnbMJh11OmaFuHb4A2EMsMJbzA%3d&risl=&pid=ImgRaw&r=0',
                    price: 8.99,
                  },
                  {
                    name: 'kosksi',
                    image:'https://th.bing.com/th/id/OIP.JWa_3NlrwgBVO16yVg9oOgHaFj?rs=1&pid=ImgDetMain',
                    price: 10.99,
                  },
                  {
                    name: 'pate',
                    image:'https://bottled-os.de/wp-content/uploads/2021/06/food-bottled-Osnabrueck-veganes-Restaurant-Galerie-8.jpg',
                    price: 7.99,
                  },
                  {
                    name: 'blankit',
                    image:'https://th.bing.com/th/id/R.42c61e240860bd04790dc84ba741bac9?rik=cfI8GuGX0EwOpw&pid=ImgRaw&r=0',

                    price: 15.99,
                  },
                  {
                    name: 'slade mechwiya',
                    image:'https://th.bing.com/th/id/R.5e477bbf80d8a23d0c8486302009cb67?rik=7P%2fDFZkLkFSqeA&pid=ImgRaw&r=0',

                    price: 12.99,
                  },
                  {
                    name: 'brik',
                    image:'https://th.bing.com/th/id/OIP.PTF1VmEdMktc4iipfGySuAHaE7?rs=1&pid=ImgDetMain',
                    price: 18.99,
                  },
                  {
                    name: 'youyou',
                    image:'https://i.pinimg.com/originals/e4/55/fc/e455fc740d3783baa31b2e4d12f1eb61.jpg',
                    price: 6.99,
                  },
                  {
                    name: 'ija',
                    image:'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/open_graph_image/public/Original_16848_cuisine-tunisienne.jpg?itok=4x1xaJqj',
                    price: 8.99,
                  },
                  {
                    name: 'mloukhiya',
                    image:'https://i.pinimg.com/originals/90/1f/9d/901f9db8f35253f8e4a5dd16afab5cbb.jpg',
                    price: 9.99,
                  },
                ]
                
            },
            {
              title :'Miams',
              description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
              posterURL:'https://th.bing.com/th/id/OIP.vXkFjE62gsdlrwJMkBVABgAAAA?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              rating : 5 ,
              menuItems: [
                {
                  name: 'Loubia',
                  image:'https://th.bing.com/th/id/OIP.cLiVn5fIzzetdtKVT3I5aAHaDa?rs=1&pid=ImgDetMain',
                  price: 8.99,
                },
                {
                  name: 'Fricasser',
                  image:'https://carthagemagazine.com/wp-content/uploads/2019/08/Tunisian-Street-food.jpg',
                  price: 10.99,
                },
                {
                  name: 'Rouz',
                  image:'https://www.eligasht.com/Blog/wp-content/uploads/2018/02/head-72.jpg',
                  price: 7.99,
                },
                {
                  name: 'Spaghetti Bolognese',
                  image:
                    'https://th.bing.com/th/id/R.7cd3e827b7b9aa1fc0e4b87c883c8556?rik=Bl1ZpuTXWqRjqg&riu=http%3a%2f%2fwww.cuisineetsentiments.com%2fimages%2fspaghetti-bolognaise_5.jpg&ehk=hSD8jyKbZ8bdSViaWaJ3b1MMVRZl1V6Qu3WBbLV%2bg6E%3d&risl=&pid=ImgRaw&r=0',
                  price: 15.99,
                },
                {
                  name: 'Spaghetti',
                  image:
                    'https://th.bing.com/th/id/OIP.IPluMjHEpxF8XNkgKlGsrQHaKX?rs=1&pid=ImgDetMain',
                  price: 12.99,
                },
                {
                  name: 'Kefta',
                  image:'https://th.bing.com/th/id/R.72a12fc593db54ef4de0181656b5c39c?rik=GsujouoH3W0HYg&pid=ImgRaw&r=0',
                  price: 18.99,
                },
                {
                  name: 'Kamounia',
                  image:'https://th.bing.com/th/id/OIP.MMNvbbb_NAtz5rHKW2DckwHaHa?rs=1&pid=ImgDetMain',
                  price: 6.99,
                },
                {
                  name: 'makaroudh',
                  image:'https://lp-cms-production.imgix.net/features/2019/01/makroudh-tunisia-bebbc90ec851.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
                  price: 8.99,
                },
                {
                  name: 'Baklawa',
                  image:'https://i.pinimg.com/originals/82/a7/b9/82a7b906fbf747d2fc8157d2272a0c10.jpg',
                  price: 9.99,
                },
              ]
           
              
               },
              
              ]
        } ,
        reducers:{
           
        }
    }

)

export default RestaurantSlice.reducer