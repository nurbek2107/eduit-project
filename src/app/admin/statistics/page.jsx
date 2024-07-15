import { Statistics } from "@/components";
import { StatisticsLine } from "@/components";
import { SidebarPie } from "@/components";

function Users() {
  return (
    <section className="p-5 flex flex-col gap-10">
      <div className="flex justify-center items-center gap-20">
        <SidebarPie />
        <StatisticsLine />
      </div>
      <Statistics />
    </section>
  );
}

export default Users;
