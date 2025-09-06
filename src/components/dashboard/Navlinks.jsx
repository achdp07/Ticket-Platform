// navigationConfig.js (good practice: keep this separate)
import { CalendarDays, LayoutDashboard, Plus, ProportionsIcon, ScanLine, ShieldHalf } from "lucide-react";

export const adminLinks = [
  { id: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { id: "Projects", to: "/admin/projects", icon: ProportionsIcon },
  { id: "Team", to: "/admin/team", icon: ShieldHalf },
  { id: "Calendar", to: "/admin/calendar", icon: CalendarDays },
  { id: "Transactions", to: "/admin/transactions", icon: ScanLine },
];

export const organizerLinks = [
  { id: "Dashboard", to : "dashboard", icon: LayoutDashboard },
  { id: "Team", to : "team", icon: ShieldHalf },
  { id: "My events", to: "events", icon: ProportionsIcon },
  { id: "Calendar", to: "calendar", icon: CalendarDays },
  { id: "Transactions", to: "transactions", icon: ScanLine },
  { id: "Create event", to: "create-event", icon: Plus },
];
