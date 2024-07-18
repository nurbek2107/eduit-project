import { SidebarPie } from "@/components";
import { UsersData } from "@/components";

function Users() {
  return (
    <section className=" bg-white p-5 flex flex-col gap-10 ">
      <SidebarPie />
      <UsersData />
    </section>
  );
}

export default Users;
