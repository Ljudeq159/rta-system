import Sidebar from "../components/Sidebar"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
        <Sidebar/>
         
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900">IT RTA Dashboard</h1>
        <p className="mt-2 text-slate-600">Welcome to the Request Technical Assistance System.</p>
      </main>
    </div>
  );
}
