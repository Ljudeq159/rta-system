export default function Header(){
    return(
        <header className="flex justify-between bg-white pt-4 shadow-md">
            <h2 className="mb-2 text-xl font-bold text-slate-900">RTA System </h2>
            <nav>
                <ul className="space-y-2">
                    <li className="rounded-lg px-4 py-3 text-slate-900 hover:bg-slate-300">Admin User</li>
                </ul>
            </nav>
        </header>
    );
}