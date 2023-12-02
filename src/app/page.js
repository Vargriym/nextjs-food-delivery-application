// import components
import Pizza from './components/Pizza';
import Banner from './components/Banner';

// pizza data
const pizzas = [
  {
    id: 1,
    name: 'Whipped cream',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Yogurt & compote',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Creamy custard',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/hawaii.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Chocolate',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/italian.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'Cinnamon & sugar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/margherita.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'Cream cheese',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/pepperoni.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'Creamy gravy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/quattro-formaggi.webp',
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'Ricotta & mixed seeds',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/quattro-stagioni.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'Ice Cream',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/tonno.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'Strawberry',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/vegetarian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'chocolate',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'Lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'raisins',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel',
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
  <section>
    <Banner />
    <div className="container mx-auto"> 
      {/* pizza grid */}
      <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4
      xl:gap-[30px] py-12'>
        {pizzas.map((pizza)=> {
          return <Pizza pizza={pizza} />;
        })};
      </div>
    </div>
  </section>
  );
}


