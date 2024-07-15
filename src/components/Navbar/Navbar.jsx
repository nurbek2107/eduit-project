import { AvatarWithUserDropdown } from '../ExportClients'
import Link from 'next/link'

function Navbar() {
    return (
        <header className="navbar border-b-2  px-11 ">
            <div className="flex-1 px-2 lg:flex-none">
                <Link href='/' className="text-xl font-bold">Edu<span className='text-[#f47c04]'>Project</span></Link>
            </div>
            <div className="flex flex-1 rounded-full justify-end px-2">
                <AvatarWithUserDropdown />
            </div>
        </header>
    )
}

export default Navbar