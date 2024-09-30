import InstallPagesLayout from "../InstallPagesLayout";

import SystemSetupTabs from "./SystemSetupTabs";

import { SYSTEM_MESSAGE } from "@/data/constant";

const SystemSetupPage = () => {
  return (
    <InstallPagesLayout description={SYSTEM_MESSAGE} title="System Setup">
      <div className="flex flex-col justify-center flex-1 items-center">
        <SystemSetupTabs />
      </div>
    </InstallPagesLayout>
  );
};

export default SystemSetupPage;
