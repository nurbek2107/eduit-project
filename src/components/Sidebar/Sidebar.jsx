import SidebarList from '../SidebarList'

function Sidebar() {
  return (
    <aside className='max-w-[300px] w-full h-screen border-r-2 pr-4 pt-10 flex flex-col items-center'>
      <SidebarList href='/' activeClassName='active-class ' />
    </aside>
  );
}

export default Sidebar