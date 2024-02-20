import { USER_ROLES } from "@/configs/auth/roles";
import { RoleType } from "@/types/auth/role";

export function verifyUser(role: RoleType | "") {
  return USER_ROLES.includes(role);
}
