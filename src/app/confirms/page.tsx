import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function Confirms() {
  const guestList = ["Lê Xuân Trường", "Bùi Tú Anh"];
  return (
    <main className="h-full w-full grid place-items-center">
      <article className="">
        <h1 className="font-black text-xl">Danh sách khách mời tham dự</h1>
        <div className="">
          <ul>
            {guestList.map((guest, index) => (
              <li key={index} className="flex items-center gap-3 mt-3">
                <Avatar>
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <p>{guest}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
