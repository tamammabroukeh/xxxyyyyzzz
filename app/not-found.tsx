import ErrorLayout from "./(sub pages)/Unauthorized/ErrorLayout";

import NotFoundLogo from "@/public/svgs/AuthSvgs/NotFound.svg";
const NotFound = () => {
  return (
    <ErrorLayout
      description="We can’t seem to find the page you’re looking for."
      header="Looks like you’re out of the flow!"
      img={NotFoundLogo}
    />
  );
};

export default NotFound;
