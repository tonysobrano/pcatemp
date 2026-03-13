import type { GetStaticProps } from "next";

export default function LegacyTeamDetailsPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => ({
  redirect: {
    destination: "/team-details",
    permanent: false,
  },
});
