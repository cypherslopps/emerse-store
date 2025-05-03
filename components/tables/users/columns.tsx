"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  email: number;
  username: string;
  role: "customer" | "admin";
  valid: boolean;
  created_at: Date;
  updated_at: Date; 
  display_name: string | null;
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "display_name",
    header: "Display Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "valid",
    header: "Valid",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },

  {
    accessorKey: "updated_at",
    header: "Updated At",
  },
]
