import type { GetStaticProps } from "next";

export default function LegacyWorkDetailsPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => ({
  redirect: {
    destination: "/work/campaign-production-system",
    permanent: false,
  },
});
