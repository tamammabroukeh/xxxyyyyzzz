"use client";
import { useFormContext } from "react-hook-form";
import { Select, SelectItem } from "@nextui-org/select";

import { InputWithLabel } from "@/components/auth";
import { MyButton } from "@/components/ui";

const DatabaseTab = ({
  error,
  onOpen,
}: {
  error: Error;
  onOpen: () => void;
}) => {
  const form = useFormContext();

  return (
    <div className="w-full md:w-[80%] mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex text-start flex-col gap-6">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-black-200 text-sm">Database Connection</h3>
            <Select
              className="max-w-full"
              defaultSelectedKeys={[form.watch("database_connection")]}
              labelPlacement="outside"
              size="lg"
              value={form.watch("database_connection")}
              variant="bordered"
              onChange={(e) =>
                form.setValue("database_connection", e.target.value)
              }
            >
              <SelectItem key={"mysql"}>mysql</SelectItem>
              <SelectItem key={"sqlite"}>sqlite</SelectItem>
              <SelectItem key={"pgsql"}>pgsql</SelectItem>
              <SelectItem key={"sqlsrv"}>sqlsrv</SelectItem>
            </Select>
          </div>
          <InputWithLabel
            error={form.formState.errors.database_hostname?.message as string}
            fieldTitle="Database Host"
            nameInSchema="database_hostname"
            register={form.register}
            serverError={error.message ?? ""}
          />
          <InputWithLabel
            error={form.formState.errors.database_port?.message as string}
            fieldTitle="Database Port"
            nameInSchema="database_port"
            register={form.register}
            serverError={error.message ?? ""}
          />
          <InputWithLabel
            error={form.formState.errors.database_name?.message as string}
            fieldTitle="Database Name"
            nameInSchema="database_name"
            placeholder="Name"
            register={form.register}
            serverError={error.message ?? ""}
          />
          <InputWithLabel
            error={form.formState.errors.database_username?.message as string}
            fieldTitle="Database User Name"
            nameInSchema="database_username"
            placeholder="User Name"
            register={form.register}
            serverError={error.message ?? ""}
          />
          <InputWithLabel
            error={form.formState.errors.database_password?.message as string}
            fieldTitle="Database Password"
            nameInSchema="database_password"
            placeholder="Password"
            register={form.register}
            serverError={error.message ?? ""}
            type="Password"
          />
        </div>
        <div className="mt-2 mx-auto">
          <MyButton
            classes="px-16 md:px-24 text-md py-2 rounded-2xl bg-slate-400"
            type="submit"
            onClick={onOpen}
          >
            Next
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default DatabaseTab;
