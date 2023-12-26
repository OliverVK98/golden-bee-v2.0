/* eslint-disable */

export interface AdditionalImageWithInfo {
  url: string;
  description: string;
}

export interface Product {
  name: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  imgUrl: string;
  bundle?: string[];
  additionalInfo?: AdditionalImageWithInfo[];
}

export interface CartProduct extends Product {
  quantity: number;
}

export const testProduct: Product = {
  name: "You Are My Sunshine Necklace",
  price: 99.99,
  discountedPrice: 49.99,
  rating: 312,
  imgUrl:
    "https://beekind.shop/cdn/shop/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
  bundle: ["Sunflower Necklace", "Gift Note and Box", "Free Sticker Pack"],
  additionalInfo: [
    {
      url: "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-10-44_ls209983_jpeg_WEBP_Image_1030_x_1029_pixels_Scaled_90_1024x1024.png?v=1634569949",
      description:
        "This incredibly unique necklace serves as a symbol of strength, health, happiness, vitality, and prosperity, making it the perfect gift for the sunshine of your life!",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/ezgif-5-e52cbf9622_1024x1024.gif?v=1646276892",
      description:
        "Did you know that Sunflowers are one of many flowers that carry and provide vital nutrients that are extremely helpful for keeping bees alive?",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0457/5648/1703/files/Screenshot_2021-10-18_at_17-11-15_ls209991_jpeg_WEBP_Image_908_x_907_pixels_1024x1024.png?v=1634570015",
      description:
        "Wear it as a daily reminder of strength, positivity, and a sense of pride knowing that you contributed to a worldwide cause that impacts us all.",
    },
  ],
};

const cartTestProduct = {
  ...testProduct,
  quantity: 2,
};

export const testProducts = Array.from({ length: 24 }, () => testProduct);
export const cartTestProducts = [cartTestProduct];
export const testSuggestedProducts = Array.from(
  { length: 4 },
  () => testProduct,
);

export const testImages = [
  "https://beekind.shop/cdn/shop/products/sunflower-necklace-bee-kind-shop-jewelry-green-leaf-120_370x.png?v=1647456186",
  "https://beekind.shop/cdn/shop/products/sunflower-necklace-bee-kind-shop-green-finger-gesture-866_1296x.jpg?v=1641870844",
  "https://beekind.shop/cdn/shop/products/BeeKindMySunshineSunshineNecklace1_900x.png?v=1647710965",
  "https://beekind.shop/cdn/shop/products/sunflower-necklace-bee-kind-shop-jewelry-sleeve-540_900x.png?v=1641870844",
  "https://beekind.shop/cdn/shop/products/BeeKindMySunshineSunshineNecklace2_900x.png?v=1647710965",
];
