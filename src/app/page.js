// import components
import Banner from './components/Banner';
import Pizza from './components/Pizza';

// pizza data
const pizzas = [
  {
    id: 1,
    name: 'Turkish',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Caramel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'blueberry',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/hawaii.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'italian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/italian.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'Creamy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/margherita.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'Venezuelan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/pepperoni.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'quattro formaggi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/quattro-formaggi.webp',
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'quattro stagioni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/quattro-stagioni.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'tonno',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/tonno.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry ',
        price: 2,
      },
      {
        image: '/parmesan.webp',
        name: 'Caramel ',
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'vegetarian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/vegetarian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.webp',
        name: 'Chocolate chips ',
        price: 2,
      },
      {
        image: '/corn.webp',
        name: 'lotus',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.webp',
        name: 'strawberry',
        price: 2,
      },
      {
        image: '/jalapeno.webp',
        name: 'Dried cranberry',
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
           return <Pizza key={pizza.id} pizza={pizza} />;
        })};
      </div>
    </div>
  </section>
  );
};


