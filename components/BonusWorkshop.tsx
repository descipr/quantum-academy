"use client";
import { IwebinarForData } from "@/constants";
import BonusCardSection from "./ui/BonusCardSection";
interface IBonusWorkshop {
  data: IwebinarForData[];
}
const BonusWorkshop = ({data}: IBonusWorkshop) => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="heading text-white">Bonus with this Workshop</h2>
        <BonusCardSection Wdata = {data}  />
      </div>
    </section>
  );
};

export default BonusWorkshop;
