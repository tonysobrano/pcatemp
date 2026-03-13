import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";
import Link from "next/link";

// prop type 
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item, handleTeamModal }: IProps) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-team-thumb tp-hover-btn-item">
        <Image
          src={item.image}
          alt={item.name}
          width={375}
          height={464}
          sizes="(min-width: 1400px) 20vw, (min-width: 992px) 20vw, (min-width: 768px) 33vw, (min-width: 576px) 50vw, 100vw"
          className="tp-team-image"
        />
      </div>
      <div className="tp-team-content">
        <span>{item.designation}</span>
        <h4
          className="tp-team-title-sm"
          onClick={() => handleTeamModal(item)}
        >
          <Link href={`/team-details/${item.id}`}>{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
