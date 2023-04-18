import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
const Sidebar = () => {
    const items = [
        /* Home sidebar*/ 
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        /* Notifications sidebar*/ 
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        },
        /* profile sidebar*/ 
        {
            label: 'Profile',
            href: '/user/123',
            icon: FaUser
        }
    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
          <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230-px]">
<SidebarLogo/>
{items.map((item) => ( <SidebarItem 
        key={item.href}
        href={item.href}
        label={item.label}
        icon={item.icon}
        />
    ))
}
        </div>
    </div> 
</div>
    );
}
export default Sidebar;