import type { GetStaticProps } from "next";

export default function LegacyServiceDetailsPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => ({
  redirect: {
    destination: "/service/production",
    permanent: false,
  },
});
