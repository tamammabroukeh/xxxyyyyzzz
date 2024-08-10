import ErrorLayout from "./ErrorLayout";

import UnauthorizationLogo from "@/public/svgs/AuthSvgs/Unauthorization.svg";
const UnauthorizedPage = () => {
  return (
    <ErrorLayout
      description="Don’t worry though, there is always a way to get back home."
      header="Missing Permission!"
      img={UnauthorizationLogo}
    />
  );
};

export default UnauthorizedPage;