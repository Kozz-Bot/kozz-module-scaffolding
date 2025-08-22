import {
  Bold,
  createMethod,
  createModule,
  ForEach,
  Italic,
  Line,
  List,
} from "kozz-module-maker";

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 19.99,
    description: "This is the first sample product",
  },
  {
    id: "2",
    name: "Product 2",
    price: 29.99,
    description: "This is the second sample product",
  },
  {
    id: "3",
    name: "Product 3",
    price: 39.99,
    description: "This is the third sample product",
  },
];

const ProductView = ({
  product,
}: {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
  };
}) => {
  return (
    <>
      <Line>
        <Bold>{product.name}</Bold> - R${product.price.toLocaleString("pt-BR")}
      </Line>
      <Line>
        <Italic>{product.description}</Italic>
      </Line>
    </>
  );
};

const TestMessage = ({ name }: { name: string }) => (
  <>
    <Line>Test</Line>
    <Line>
      <Bold>{name}</Bold> is a great guy!
    </Line>
    <ForEach
      data={products}
      render={(product) => <List items={<ProductView product={product} />} />}
    />
  </>
);

createModule({
  name: "test",
  address: "ws://127.0.0.1:4521",
  commands: {
    boundariesToHandle: ["*"],
    methods: {
      ...createMethod("default", (requester) => {
        requester.reply(<TestMessage name={"Tramonta"} />);
      }),
    },
  },
});
