
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Project', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
]
function Header() {
    return (
        <>
           <nav className="mt-15 relative flex flex-wrap items-center justify-between pt-0.5 pb-0.5 bg-transparent">
               <div>
                   <a></a>
                   <div className="navbar-toggler collapsed" data-toggle="collapse" data-target="#collapsibleNavbar">
                       <span className="bar"></span>
                       <span className="bar"></span>
                       <span className="bar"></span>
                   </div>
                   <div className="flex space-x-4">
                       {navigation.map((item) => (
                           <a
                               key={item.name}
                               href={item.href}
                               className={classNames(
                                   item.current ? 'bg-gray-900 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                   'rounded-md px-3 py-2 text-sm font-medium'
                               )}
                               aria-current={item.current ? 'page' : undefined}
                           >
                               {item.name}
                           </a>
                       ))}
                   </div>
               </div>
           </nav>
        </>
    )
}

export default Header;