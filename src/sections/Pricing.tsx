import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";
import CountUp from "react-countup";
import Button from "../components/Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx(
                  "pricing-head_btn",
                  monthly ? "text-p1 font-bold" : "text-p5"
                )}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx(
                  "pricing-head_btn",
                  !monthly ? "text-p1" : "text-p5"
                )}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-200 ease-in-out",
                  !monthly && "translate-x-full"
                )}
              />
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                alt="Background"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="Background"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map(
              (
                {
                  caption,
                  features,
                  icon,
                  id,
                  logo,
                  priceMonthly,
                  priceYearly,
                  title,
                },
                index
              ) => (
                <div
                  key={id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                >
                  {index === 1 && (
                    <div className="g4 absolute h330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                  )}
                  <div
                    className={clsx(
                      "absolute left-0 right-0 flex z-2 items-center justify-center",
                      index === 1 ? "-top-6 " : "-top-6 xl:-top-11"
                    )}
                  >
                    <img
                      src={logo}
                      alt={title}
                      className={clsx(
                        "object-contain drop-shadow-2xl",
                        index === 1 ? "size-[120px]" : "size-[88px]"
                      )}
                    />
                  </div>
                  <div
                    className={clsx(
                      "relative flex flex-col items-center",
                      index === 1 ? "pt-24" : "pt-12"
                    )}
                  >
                    <div
                      className={clsx(
                        "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                        index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                      )}
                    >
                      {title}
                    </div>
                    <div className="relative z-2 flex items-center justify-center">
                      <div
                        className={clsx(
                          "h-num flex items-start",
                          index === 1 ? "text-p3" : "text-p4"
                        )}
                      >
                        $
                        <CountUp
                          end={!monthly ? priceYearly : priceMonthly}
                          start={priceMonthly}
                          duration={0.4}
                          useEasing
                          preserveValue
                        />
                      </div>
                      <div className="small-1 relative top-3 ml-1 uppercase">
                        /mo
                      </div>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "flex flex-row items-center justify-center w-full gap-3 transition-all duration-200",
                      monthly ? "opacity-0" : "opacity-100"
                    )}
                  >
                    <p className="text-slate-400 line-through text-sm">
                      ${priceMonthly * 12}
                    </p>
                    <div className="relative w-[1px] opacity-35 bg-slate-400 h-[16px] border-[1px] border-slate-400" />
                    <p
                      className={clsx(
                        "text-md base-bold",
                        index === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${priceYearly * 12}
                      <span className="small-1 relative uppercase ml-1 text-slate-400 text-sm">
                        /ye
                      </span>
                    </p>
                  </div>

                  <div
                    className={clsx(
                      "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center",
                      index === 1 ? "border-b text-p3" : "text-p4"
                    )}
                  >
                    {caption}
                  </div>
                  <ul className="mx-auto space-y-4 xl:px-7">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="relative flex items-center gap-5"
                      >
                        <img
                          src="/images/check.png"
                          alt="Check"
                          className="size-10 object-contain"
                        />
                        <p className="flex-1">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex w-full justify-center">
                    <Button icon={icon}>Get Started</Button>
                  </div>
                  {index === 1 && (
                    <p className="small-compact mt-9 text-center text-p3 before:content-['-'] before:mx-2.5 after:mx-2.5 after:content-['-']">
                      Limited Time Offer!
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
