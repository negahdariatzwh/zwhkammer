import { React } from "react";
import PageInfo from "../components/common/PageInfo";
import Summery from "../components/institute/Summery";
import AddTopPage from "../components/common/AddTopPage";
function Institute() {
  return (
    <div>
      <PageInfo />
      <AddTopPage />
      <Summery />
      Manage Single Institute
    </div>
  );
}

export default Institute;
