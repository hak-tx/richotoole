import MerchCarousel, { type MerchProduct } from "@/components/MerchCarousel";

const COLLECTION_URL =
  "https://godtexasandtacos.com/collections/rich-otoole-collection";
const PRODUCTS_URL = `${COLLECTION_URL}/products.json?limit=50`;

type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  images: Array<{
    src: string;
    alt?: string | null;
  }>;
  variants: Array<{
    price: string;
    available: boolean;
  }>;
};

type ShopifyCollectionResponse = {
  products: ShopifyProduct[];
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function formatPrice(variants: ShopifyProduct["variants"]) {
  const prices = variants
    .map((variant) => Number.parseFloat(variant.price))
    .filter(Number.isFinite);

  if (prices.length === 0) return "View product";

  const lowestPrice = Math.min(...prices);
  const hasPriceRange = prices.some((price) => price !== lowestPrice);
  return `${hasPriceRange ? "From " : ""}${priceFormatter.format(lowestPrice)}`;
}

async function getCollectionProducts(): Promise<MerchProduct[]> {
  try {
    const response = await fetch(PRODUCTS_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Shopify returned ${response.status}`);
    }

    const data = (await response.json()) as ShopifyCollectionResponse;

    return data.products
      .filter((product) => product.images[0]?.src)
      .map((product) => ({
        id: String(product.id),
        title: product.title,
        href: `https://godtexasandtacos.com/products/${product.handle}`,
        image: product.images[0].src,
        imageAlt: product.images[0].alt || product.title,
        price: formatPrice(product.variants),
        available: product.variants.some((variant) => variant.available),
      }));
  } catch (error) {
    console.error("Unable to load the Rich O'Toole Shopify collection", error);
    return [];
  }
}

export default async function MerchCollection() {
  const products = await getCollectionProducts();

  return (
    <section id="merch" className="bg-black px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-7 text-center sm:mb-9">
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-gray-400">
            Official Merch
          </p>
          <h2 className="text-3xl text-white sm:text-4xl">
            Rich O&apos;Toole Collection
          </h2>
        </div>

        {products.length > 0 ? (
          <MerchCarousel products={products} collectionUrl={COLLECTION_URL} />
        ) : (
          <div className="text-center">
            <a
              href={COLLECTION_URL}
              className="btn-secondary uppercase tracking-widest text-sm"
            >
              View Collection
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
