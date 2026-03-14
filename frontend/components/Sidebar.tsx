import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CreditCard, Settings, Shield, Users } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/admin", label: "Admin", icon: Shield, adminOnly: true }
];

export const Sidebar = ({ role = "USER" }: { role?: "USER" | "ADMIN" }) => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/40 p-4">
      <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
        <Users className="h-4 w-4" />
        <span>Navigation</span>
      </div>
      <div className="space-y-2">
        {links
          .filter(link => (link.adminOnly ? role === "ADMIN" : true))
          .map(link => {
            const Icon = link.icon;
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-primary-600 text-white" : "text-slate-200 hover:bg-slate-800"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
      </div>
    </aside>
  );
};
