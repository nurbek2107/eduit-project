
import { SidebarPie } from "@/components";
import { LineChart } from "@/components";

function Users() {
  return (
    <section className="p-5  flex flex-col gap-10">
      <SidebarPie />
      <LineChart />
    </section>
  );
}

export default Users;
