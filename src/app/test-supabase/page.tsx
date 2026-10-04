import { supabase } from "@/lib/supabase";

export default async function TestSupabasePage() {
    const { data, error } = await supabase 
    .from("profiles")
    .select("*");

    return(
        <main className="p-8">
            <h1 className="text-2xl font-bold">
                Supabase test
            </h1>

            <pre className="mt-4 rounded bg-slate-100 text-slate-900 p-4">
                {JSON.stringify({data, error }, null, 2)}
            </pre>
        </main>
    );

}