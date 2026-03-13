import type { GetStaticProps } from "next";

export default function LegacyBlogDetailsPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => ({
  redirect: {
    destination: "/blog-details",
    permanent: false,
  },
});
