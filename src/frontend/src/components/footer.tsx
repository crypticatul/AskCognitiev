import Link from "next/link";
import { Button } from "./ui/button";
import { SiX, SiGithub, SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full flex fixed bottom-0 right-0 p-1 z-50 bg-background/95">
      <div className="px-1 w-full flex flex-row justify-end space-x-1">
        <span className="text-sm">Powered By Cognitiev.com 🧠</span>
        <Link href="https://x.com/cognitiev" target="_blank">
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <SiX size={16} />
          </Button>
        </Link>
      </div>
    </footer>
  );
}