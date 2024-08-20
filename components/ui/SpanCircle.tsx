export const SpanCircle = ({ color }: { color: string }) => {
  return <span className={`w-4 h-4 rounded-full ${color}`} />;
};

export const Colors = ({ colors }: { colors: string[] }) => {
  return (
    <>
      {colors &&
        colors.map((color) => <SpanCircle key={color} {...{ color }} />)}
    </>
  );
};
export const colors = (
  <Colors colors={["bg-red-500", "bg-yellow-500", "bg-green-500"]} />
);
