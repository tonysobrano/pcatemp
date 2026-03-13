import TeamDetailsMain from '@/components/team/team-details-main';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Prime Creative - Team Details page",
};

const page = () => {
    return (
        <>
            <TeamDetailsMain id={1} />
        </>
    );
};

export default page;
