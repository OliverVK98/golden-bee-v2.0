export enum ItemType {
  NECKLACES = "Necklaces",
  RINGS = "Rings",
  BRACELETS = "Bracelets",
  EARRINGS = "Earrings",
  BUNDLES = "Bundles",
  GIFT_CARD = "Gift Cards",
}

export enum CollectionType {
  SUNFLOWERS = "Sunflowers",
  DAISIES = "Daisies",
  BEES = "Bees",
  BRACELETSWITHNOTES = "Bracelets With Notes",
  ACCESSORIES = "Accessories",
}

export const itemCollectionURLMapper: Record<
  ItemType | CollectionType,
  string
> = {
  [CollectionType.SUNFLOWERS]: "/sunflowers",
  [CollectionType.DAISIES]: "/daisies",
  [CollectionType.BEES]: "/bees",
  [CollectionType.BRACELETSWITHNOTES]: "/bracelets_with_notes",
  [CollectionType.ACCESSORIES]: "accessories",
  [ItemType.BRACELETS]: "/bracelets",
  [ItemType.BUNDLES]: "/bundles",
  [ItemType.EARRINGS]: "/earrings",
  [ItemType.RINGS]: "/rings",
  [ItemType.NECKLACES]: "/necklaces",
  [ItemType.GIFT_CARD]: "gift_cards",
};

interface FooterItem {
  src: string;
  description: string;
}

export const footerItems: FooterItem[] = [
  {
    src: "/assets/footer/volunteer.svg",
    description: "Saving Pollinators Together",
  },
  {
    src: "/assets/footer/eco.svg",
    description: "100% Eco-Friendly Materials",
  },
  {
    src: "/assets/footer/plane.svg",
    description: "Free Priority Shipping Daily",
  },
  {
    src: "/assets/footer/lock.svg",
    description: "Safe and Secure Checkout",
  },
];

export const footerLinks: { text: string; url: string }[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Best Sellers",
    url: "/collections/bees",
  },
  {
    text: "Contact Us",
    url: "/",
  },
  {
    text: "Refund Policy",
    url: "/",
  },
  {
    text: "Privacy Policty",
    url: "/",
  },
  {
    text: "Terms of Service",
    url: "/",
  },
];

export const address: string[] = [
  "8076 Old Cherry Avenue",
  "Bronx, NY 10457",
  "info@goldenbee.shop",
];

export const FRONT_IMAGE_URL =
  "https://beekind.shop/cdn/shop/files/LSP06126.jpg?v=1614308356";

export const FRONT_IMAGE_URL_TWO =
  "https://beekind.shop/cdn/shop/files/Bee_Kind_Gifts_1476b296-308e-477c-9afe-c1c50cb668e8.jpg?v=1616179446";

export const FRONT_PAGE_TITLE =
  "Join our mission to save and protect our buzzy pollinators around the globe❤️";

export const FRONT_IMAGE_THREE =
  "https://beekind.shop/cdn/shop/files/BEE-ing_Kind_is_a_Lifestyle_2048x.jpg?v=1623903758";

export const FRONT_IMAGE_FOUR =
  "https://beekind.shop/cdn/shop/files/Join_the_Movement_to_Save_Our_Buzzing_Friends" +
  "_39a722de-5768-4689-84f6-6393f7c5088d_2048x.jpg?v=1623903777";

export const FRONT_PAGE_TEXT =
  "Wear your lovely Bee Kind accessories as a reminder of being part of the community. Every purchase saves the bees.";

export const animationBannerZIndex = 2;

export const sectionImageTextZIndex = 2;

export const BRACELETS_IMAGE =
  "https://beekind.shop/cdn/shop/collections/Bee_Bright_Flower_2_540x.jpg?v=1636309843";

export const SILVER_STYLE_IMAGE =
  "https://beekind.shop/cdn/shop/collections/You_Are_My_Sunshine_Bee_Kind_540x.png?v=1636307309";

export const BEES_IMAGE =
  "https://beekind.shop/cdn/shop/collections/IMG_0827_540x.jpg?v=1636308760";

export const SUNFLOWERS_IMAGE =
  "https://beekind.shop/cdn/shop/collections/ScreenShot2020-11-19at9.14.49PM_540x.jpg?v=1636308416";

export const MODERN_STYLES_IMAGE =
  "https://beekind.shop/cdn/shop/collections/LSP06218_360x.jpg?v=1613282854";

export const NATURE_LOVERS_IMAGE =
  "https://beekind.shop/cdn/shop/collections/yy_360x.png?v=1613355260";

export const PREMIUM_JEWELRY_IMAGE =
  "https://beekind.shop/cdn/shop/collections/Untitled_design_360x.png?v=1613355900";
