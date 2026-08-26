import type { Metadata } from "next";
import "./admin.css";
import { logout } from "./actions";

export const metadata: Metadata = {
  title: "Administration — Astarté Conseils",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="adm">
      <header className="adm-top">
        <a href="/admin" className="adm-brand">Astarté · Administration</a>
        <form action={logout}>
          <button className="adm-logout" type="submit">Se déconnecter</button>
        </form>
      </header>
      <main className="adm-main">{children}</main>
    </div>
  );
}
