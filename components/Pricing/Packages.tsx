import { PackagesSwiper, SinglePackage } from ".";

import { IPackages } from "@/interfaces";
import { PackagesData } from "@/data";

export default function Packages() {
  return (
    <PackagesSwiper>
      {PackagesData.map(
        ({
          GPTPlus,
          ImageTokens,
          Support,
          WordTokens,
          id,
          price,
          type,
        }: IPackages) => (
          <SinglePackage
            key={id}
            {...{
              GPTPlus,
              ImageTokens,
              price,
              Support,
              type,
              WordTokens,
              id,
            }}
          />
        ),
      )}
    </PackagesSwiper>
  );
}
