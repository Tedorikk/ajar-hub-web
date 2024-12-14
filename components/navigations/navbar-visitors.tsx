import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { supabase } from "@/lib/supabaseClient";

export default function VisitorNavBar() {
    const publicUrl = supabase.storage.from('ajarhub_storage').getPublicUrl('Logo.png').data.publicUrl;

    return (
        <div className="flex flex-row w-full h-auto md:h-20 border-b justify-between px-4 md:px-12 py-4 items-center">
            <Link href="/" className="flex flex-row gap-3 md:gap-5 items-center">
                <div className="flex w-10 h-10 md:w-12 md:h-12 items-center">
                    <Image
                        src={publicUrl}
                        alt="Logo"
                        width={1080}
                        height={1080}
                        className="object-contain"
                    />
                </div>
                <div className="text-2xl md:text-3xl font-bold items-center">
                    Ajar HUB
                </div>
            </Link>
            <Link className={buttonVariants({ variant: "outline" })} href="/login">
                Masuk
            </Link>
        </div>
    );
}