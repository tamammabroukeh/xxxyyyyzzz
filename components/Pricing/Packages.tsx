/* eslint-disable prettier/prettier */
import { Message } from "../ui";

import { PackagesSwiper, SinglePackage } from ".";

import { IPackages } from "@/interfaces";
import { PackagesData } from "@/data";

export default function Packages() {
  return PackagesData.length ? (
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
  ) : (
    <Message
      classes="text-4xl font-[500] text-red-500"
      title="No found pricing yet!"
    />
  );
}
