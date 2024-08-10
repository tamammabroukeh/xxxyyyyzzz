export default function SingleDetail({
  children,
  isLimited = false,
}: {
  children: React.ReactNode;
  isLimited?: boolean;
}) {
  if (isLimited)
    return (
      <p className="text-md md:text-base lg:text-md text-black-200 font-[300] leading-[1.5rem]">
        <span className="font-[500]">Unlimited </span>
        {children}
      </p>
    );

  return (
    <p className="text-md md:text-base lg:text-md text-black-200 font-[300] leading-[1.5rem]">
      {children}
    </p>
  );
}
