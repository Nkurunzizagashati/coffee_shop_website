const Products = () => {
  const products = [
    {
      name: "Capucino",
      description: "This is the best quality coffee in the world",
    },
    {
      name: "Capucino",
      description: "This is the best quality coffee in the world",
    },
    {
      name: "Capucino",
      description: "This is the best quality coffee in the world",
    },
    {
      name: "Capucino",
      description: "This is the best quality coffee in the world",
    },
  ];
  return (
    <section className=" w-full p-10 font-courgette">
      <h2 className=" text-center text-3xl mb-8 font-bold">Our products</h2>
      <div className=" grid grid-cols-4 items-center justify-center gap-6">
        {products?.map((prod, index) => {
          return (
            <div
              key={index}
              className={`p-4 shadow-sm shadow-slate-400 rounded`}
            >
              <img
                src={process.env.PUBLIC_URL + "/coffeeShop.jpg"}
                alt="Coffee Shop"
                className=" h-40 w-full object-cover rounded"
              />
              <div className=" flex flex-col gap-2">
                <h2 className=" font-bold">{prod.name}</h2>
                <p>{prod.description}</p>
                <span className=" inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded hover:cursor-pointer text-center">
                  Learn more
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
