import React, { ReactNode } from "react";
import { classesOf } from "../utils/classes-of";

const ListInfinityAutoScroll = ({
  items,
  speed = 5000,
  itemClassName = "",
}: {
  items: ReactNode[];
  speed?: number;
  itemClassName?: string;
}) => {
  const [playState, setPlayState] = React.useState<"running" | "paused">(
    "running"
  );

  console.log(playState);

  return (
    <div
      className="w-full overflow-hidden flex mb-8"
      onMouseOver={() => setPlayState("paused")}
      onMouseLeave={() => setPlayState("running")}
    >
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <section
            key={`infinity-auto-scroll-${idx}`}
            className="flex animate-swipe"
            style={{
              animationDuration: `${speed}ms`,
              animationPlayState: playState,
            }}
          >
            {items.map((item, index) => (
              <div
                className={classesOf("flex-none", itemClassName)}
                key={`infinity-auto-scroll-${index}-${idx}`}
              >
                {item}
              </div>
            ))}
          </section>
        ))}
    </div>
  );
};

export { ListInfinityAutoScroll };
