import type { GetStaticProps } from "next";

export default function LegacyShopDetailsPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => ({
  redirect: {
    destination: "/shop-details",
    permanent: false,
  },
});
