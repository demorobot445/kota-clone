import { lists } from "./list";
import { Arrow as BigArrow } from "./Svgs";
import Card from "./Card";

const Services = () => {
  return (
    <section className="max-w-9xl 2xl:max-w-10xl 2xl:px-7.5-percent mx-auto">
      <div className="px-7-percent grid grid-cols-12 items-center py-[52px] lg:py-[108px]">
        <h1 className="col-span-12 text-[2.8125rem] leading-[calc(2.8125rem*1.2)] -tracking-widest uppercase lg:col-start-1 lg:col-end-4 lg:text-[10rem] lg:leading-[calc(10rem*1.2)]">
          our
        </h1>
        <h1 className="col-start-3 col-end-11 text-[2.8125rem] leading-[calc(2.8125rem*1.2)] -tracking-widest uppercase lg:col-start-3 lg:col-end-8 lg:text-[10rem] lg:leading-[calc(10rem*1.2)]">
          services
        </h1>
        <div className="col-start-12 col-end-13 aspect-square">
          <BigArrow />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 lg:gap-0 lg:px-[2%] 2xl:px-0">
        {lists.map((elem, index) => {
          return <Card {...elem} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Services;
