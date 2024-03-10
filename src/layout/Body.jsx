import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 2.5,
    name: "Apple",
    description: "A crisp and juicy fruit, commonly red or green in color.",
  },

  {
    id: 2,
    price: 1.75,
    name: "Banana",
    description: "A long curved fruit with a yellow skin and soft flesh.",
  },

  {
    id: 3,
    price: 3.2,
    name: "Orange",
    description:
      "A round citrus fruit with a bright orange skin and juicy segments.",
  },

  {
    id: 4,
    price: 4.0,
    name: "Grapes",
    description:
      "Small, sweet, and seedless fruits typically clustered in bunches.",
  },

  {
    id: 5,
    price: 2.8,
    name: "Strawberry",
    description:
      "A small, sweet, and juicy red fruit with tiny seeds on its surface.",
  },

  {
    id: 6,
    price: 1.9,
    name: "Kiwi",
    description:
      "A small oval fruit with brown fuzzy skin and green flesh with black seeds.",
  },

  {
    id: 7,
    price: 3.5,
    name: "Pineapple",
    description:
      "A tropical fruit with tough spiky skin and sweet yellow flesh.",
  },

  {
    id: 8,
    price: 2.2,
    name: "Mango",
    description:
      "A juicy stone fruit with smooth skin and sweet, orange-yellow flesh.",
  },

  {
    id: 9,
    price: 3.8,
    name: "Peach",
    description:
      "A soft, fuzzy-skinned fruit with a sweet and juicy yellow or white flesh.",
  },

  {
    id: 10,
    price: 2.6,
    name: "Pear",
    description:
      "A sweet and juicy fruit with a characteristic bell shape and green or yellow skin.",
  },

  {
    id: 11,
    price: 3.25,
    name: "Cherry",
    description:
      "Small round fruits with a bright red or dark purple skin and a sweet or sour taste.",
  },

  {
    id: 12,
    price: 4.5,
    name: "Blueberry",
    description: "Small, round, and sweet berries with a deep blue color.",
  },

  {
    id: 13,
    price: 1.6,
    name: "Lemon",
    description:
      "A yellow citrus fruit known for its sour taste and acidic juice.",
  },

  {
    id: 14,
    price: 2.9,
    name: "Watermelon",
    description:
      "A large, green-skinned fruit with sweet, juicy, and pink or red flesh.",
  },

  {
    id: 15,
    price: 4.2,
    name: "Avocado",
    description:
      "A creamy textured fruit with green or black skin and a large pit in the center.",
  },
];

const Body = () => {
  return (
    <section className='Body'>
      {fruits.map((fruit) => {
        return <Card key={fruit.id} fruit={fruit} />;
      })}
    </section>
  );
};

export default Body;
