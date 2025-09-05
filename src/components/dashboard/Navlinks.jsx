// navigationConfig.js (good practice: keep this separate)
import { CalendarDays, LayoutDashboard, Plus, ProportionsIcon, ScanLine, ShieldHalf } from "lucide-react";

export const adminLinks = [
  { id: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { id: "Projects", href: "/admin/projects", icon: ProportionsIcon },
  { id: "Team", href: "/admin/team", icon: ShieldHalf },
  { id: "Calendar", href: "/admin/calendar", icon: CalendarDays },
  { id: "Transactions", href: "/admin/transactions", icon: ScanLine },
];

export const organizerLinks = [
  { id: "Dashboard", href: "/organizer/dashboard", icon: LayoutDashboard },
  { id: "Create event", href: "/organizer/create", icon: Plus },
  { id: "My events", href: "/organizer/events", icon: ProportionsIcon },
  { id: "Calendar", href: "/organizer/calendar", icon: CalendarDays },
  { id: "Transactions", href: "/organizer/transactions", icon: ScanLine },
  { id: "Create event", href: "/organizer/create-event", icon: Plus },
];
