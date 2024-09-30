import { Check } from "../icons";
// const requirs = [
//   { id: crypto.randomUUID(), title: "Ctype" },
//   { id: crypto.randomUUID(), title: "cURL" },
//   { id: crypto.randomUUID(), title: "DOM" },
//   { id: crypto.randomUUID(), title: "Fileinfo" },
//   { id: crypto.randomUUID(), title: "Filter" },
//   { id: crypto.randomUUID(), title: "Hash" },
//   { id: crypto.randomUUID(), title: "Mbstring" },
//   { id: crypto.randomUUID(), title: "OpenSSL" },
//   { id: crypto.randomUUID(), title: "PCRE" },
//   { id: crypto.randomUUID(), title: "PDO" },
//   { id: crypto.randomUUID(), title: "Session" },
//   { id: crypto.randomUUID(), title: "Tokenizer" },
//   { id: crypto.randomUUID(), title: "XML" },
//   { id: crypto.randomUUID(), title: "zip" },
//   { id: crypto.randomUUID(), title: "JSON" },
// ];

const SingleRequire = ({ title }: { title: string }) => {
  return (
    <div className="flex items-end justify-between ">
      <p className="font-[500] leading-none md:text-md xl:text-lg">{title}</p>
      <Check className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
    </div>
  );
};

export default SingleRequire;
