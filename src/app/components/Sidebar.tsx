export default function Sidebar (){
    return(
        <aside className="min-h-screen w-50 bg-slate-900 p-6 text-white">     
            <h2 className="mb-8 text-xl font-bold">RTA System</h2>
            <nav>
                <ul className="space-y-2">
                    <li className="rounded-lg px-4 py-3 hover:bg-slate-800">Dashboard</li>
                    <li className="rounded-lg px-4 py-3 hover:bg-slate-800">My Tickets</li>
                    <li className="rounded-lg px-4 py-3 hover:bg-slate-800">New RTA</li>
                    <li className="rounded-lg px-4 py-3 hover:bg-slate-800">Reports</li>
                    <li className="rounded-lg px-4 py-3 hover:bg-slate-800" >Settings</li>
                </ul>
            </nav>


        </aside>
    );
}