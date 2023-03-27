import { BaseCollection } from "./BaseCollection";
import { User } from "../datatype/User";
/**
 * Colección de grupos
 */
export class UserCollection extends BaseCollection<User> {
  constructor() {
    super();
  }
}
