// Mirror backend roles so casing stays consistent between API and UI
export type Role = "USER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt?: string;
}
