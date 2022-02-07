const mongoose = require("mongoose");

const mongoDb =
  "mongodb+srv://root:root@cluster0.bfoky.mongodb.net/Allergic-app?retryWrites=true&w=majority";
const FoodSchema = require("../../api/food/Food.model");
const food = [
  {
    name: "Cola Cao",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232479/alergenos/pack-colacao_s3rixh.png",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Nestle Jungly",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232474/alergenos/tableta-nestle-jungly_r1nukk.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Doritos Chilli",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232428/alergenos/doritos-chilli-bolsita-44gr_tgykhh.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Twix",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232426/alergenos/twix_cgs47f.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Chiquilin",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232424/alergenos/chiquilin_yc9vmj.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Chili con carne Carretilla",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232421/alergenos/chili_con_carne_xye560.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Atún claro Isabel",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232418/alergenos/atun_caxoyy.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },

  {
    name: "Rufles Jamón",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232416/alergenos/rufles_jabtwu.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Caldo Pollo Gallina Blanca",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232413/alergenos/caldo_x533sa.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "vino cuatro rayas",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232411/alergenos/vino_lb6owd.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "aceitunas rioverde con pepinillo",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232409/alergenos/aceitunas_aamv5j.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Jamón cocido El Pozo",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232407/alergenos/jamon_cocido_sgzg13.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Revuelto setas Findus",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232405/alergenos/revueltosetas_k2lorc.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "Empanada Pollo Mendoza",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232403/alergenos/empanada_en5rpr.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
  {
    name: "albóndigas de pollo Carretilla",
    img: "https://res.cloudinary.com/dua6dm8ik/image/upload/v1644232400/alergenos/alb%C3%B3ndigas_ilz9vz.jpg",
    Allergens: [],
    traces: [],
    barcode: "string",
  },
];
const foodDocuments = food.map((food) => new FoodSchema(food));

mongoose
  .connect(mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allFood = await FoodSchema.find();
    if (allFood.length) {
      await FoodSchema.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting Foods: ${err}`))
  .then(async () => {
    await FoodSchema.insertMany(foodDocuments);
    console.log("Foods successfully created");
  })
  .catch((err) => console.log(`Error creating Foods: ${err}`))
  .finally(() => mongoose.disconnect());
