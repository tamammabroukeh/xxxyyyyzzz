import { Input } from "@nextui-org/input";

import { MyButton } from "@/components/ui";

const TitleTab = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 text-black-200">
        <label className="font-[500] text-md" htmlFor="name">
          Website Name:
        </label>
        <div>
          <Input
            classNames={{
              input: "text-md py-3",
              inputWrapper: `h-full rounded-xl border-1`,
            }}
            defaultValue="My Website"
            name="name"
            radius="full"
            type="text"
            variant="bordered"
          />
          <p>You can always update your site title later.</p>
        </div>
        <MyButton classes="px-20 text-md bg-slate-400">Next</MyButton>
      </div>
    </div>
  );
};

export default TitleTab;
