import UserComponemt from "../components/UserComponent";
import BusComponent from "../components/BusComponent";
import LineComponent from "../components/LineComponent";
export default function AdminPage() {
  return (
    <><div className="main">
      <div>
        <UserComponemt />
      </div>
      <div>
        <BusComponent />
      </div>
      <div>
        <LineComponent />
      </div>
      </div>
    </>
  );
}
