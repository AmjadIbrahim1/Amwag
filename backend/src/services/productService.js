import productModel from "../models/productModel.js";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        _id: {
          $oid: "68d139a278b612554e87b1c5",
        },
        title: "Grilled Shrimp",
        image:
          "https://www.afarmgirlsdabbles.com/wp-content/uploads/2023/09/grilled-shrimp-afarmgirlsdabbles-01s.jpg",
        price: 50,
        stock: 120,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1c6",
        },
        title: "Fried Calamari",
        image:
          "https://www.dinneratthezoo.com/wp-content/uploads/2019/11/fried-calamari-67.jpg",
        price: 30,
        stock: 30,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1c7",
        },
        title: "Lobster Thermidor",
        image:
          "https://www.seriouseats.com/thmb/WoGZrLtBwKNxCy6h62fM9ht-Lus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250212-SEA-LobsterThermidor-AmandaSuarez-hero-1d4d6f1652e649b1a883fffb54dd2c2e.jpg",
        price: 120,
        stock: 50,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1c8",
        },
        title: "Fish and Chips",
        image:
          "https://dinnerthendessert.com/wp-content/uploads/2024/02/fish-and-chips-1x1-1.jpg",
        price: 10,
        stock: 200,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1c9",
        },
        title: "Garlic Butter Crab",
        image:
          "https://yummykitchentv.com/wp-content/uploads/2022/09/garlic-butter-crab-and-shrimp-01.jpg",
        price: 180,
        stock: 10,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1ca",
        },
        title: "Seafood Paella",
        image:
          "https://spanishsabores.com/wp-content/uploads/2023/08/Seafood-Paella-Featured.jpg",
        price: 250,
        stock: 50,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1cb",
        },
        title: "Grilled Salmon",
        image:
          "https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg",
        price: 50,
        stock: 120,
        __v: 0,
      },
      {
        _id: {
          $oid: "68d139a278b612554e87b1cc",
        },
        title: "Oysters on the Half Shell",
        image:
          "https://www.onthebendsa.com/wp-content/uploads/2022/08/Gulf-Oyster-On-The-Half-Shell.jpg",
        price: 500,
        stock: 50,
        __v: 0,
      },
    ];

    const nowProducts = await getAllProducts();
    if (nowProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("Cannot seed database");
  }
};
