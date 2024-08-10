import { Textarea } from "@nextui-org/input";
import { IconChevronsRight } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";

export default function CustomerServicesForm() {
  return (
    <div className="md:ml-5 mt-10 md:mt-14 space-y-6">
      <h1 className="text-lg md:text-xl lg:text-3xl">How can we help ?</h1>
      <div className="relative max-w-md">
        <Textarea
          className="w-full relative shadow-md rounded-xl"
          classNames={{
            inputWrapper: "bg-white-100",
            input: "placeholder:text-black-100",
          }}
          minRows={6}
          placeholder="i need a typical type of theme for my website"
        />
        <IconChevronsRight className="absolute rotate-[30deg] w-5 h-5 bottom-1 right-1 z-10 text-black-100" />
      </div>
      <Button className="rounded-2xl bg-blue-500 text-background px-14 text-md leading-[24px]">
        Send
      </Button>
    </div>
  );
}
