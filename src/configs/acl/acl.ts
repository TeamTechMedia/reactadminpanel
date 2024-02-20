import { verifyUser } from "@/functions/auth/verify-user";
import { RoleType } from "@/types/auth/role";
import { AbilityBuilder, createMongoAbility } from "@casl/ability";

/**
 * @param user contains details about logged in user: its id, name, email, etc
 */
export function defineAbilitiesFor(role: RoleType | "") {
  const { can, build } = new AbilityBuilder(createMongoAbility);
  const isVerifiedUser = verifyUser(role);
  if (isVerifiedUser) {
    can("manage", "all");
    return build();
  }

  return build();
}
