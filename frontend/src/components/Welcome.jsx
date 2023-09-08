const Welcome = () => {
  const divStyle = {
    backgroundImage: `url("/coffeeShop.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transform: "translateZ(-50px)",
  };

  return (
    <section>
      <div
        style={divStyle}
        className=" h-screen w-full flex justify-center items-center text-white"
      >
        <div className=" font-courgette text-xl p-20 flex flex-col gap-20">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eaque
            modi maxime id? Placeat officiis ducimus error ab hic libero,
            dignissimos dolorem iste, saepe qui repudiandae assumenda nesciunt
            non et. Fugit quis illum odio nisi at fugiat saepe quaerat,
            accusantium reiciendis odit! Natus recusandae eveniet quia adipisci
            sit facere reprehenderit delectus pariatur totam doloribus et ab,
            consequatur quaerat corrupti nam. In perspiciatis saepe, earum
            deserunt culpa ab facere quia animi aperiam vero non commodi, rem,
            delectus enim dolor fugit? Deserunt, ducimus. Doloribus consectetur
            unde ducimus fuga hic sed qui. Itaque! Mollitia, doloribus! Illum
            accusantium aspernatur harum nam laborum, reiciendis in consequuntur
            velit voluptates eligendi magni sed, tempore earum eum molestiae
            unde! Odit sapiente praesentium labore itaque! Voluptatibus odio aut
            ad. Iusto ratione, deserunt placeat non quidem aspernatur incidunt
            voluptate dolorum nostrum sequi beatae, quaerat ipsam velit
            laboriosam consectetur? Ad fugiat, pariatur voluptates quam
            asperiores maxime magni at placeat adipisci quisquam?
          </p>
          <div className=" flex items-center justify-center">
            <span className=" bg-cyan-500 inline-block px-4 py-2 rounded hover:bg-cyan-400 hover:cursor-pointer">
              check on our products
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
