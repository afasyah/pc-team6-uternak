import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  name: string;
  email: string;
  password: string;
  token: string;
}

export interface UserAuthInfo {
  user: User | null;
  isAuthenticated: boolean;
}

export type Role = "admin" | "user";

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  user = window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user") as string)
    : null;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get authenticated user
   * @returns object
   */
  get getUser(): User {
    return this.user;
  }

  /**
   * Get authenticated data
   * @returns object
   */
  get getAuth(): UserAuthInfo {
    return {
      isAuthenticated: this.isAuthenticated,
      user: this.user,
    };
  }

  @Mutation
  [Mutations.SET_TOKEN](payload: string): void {
    JwtService.saveToken(payload);
  }

  @Mutation
  [Mutations.REMOVE_TOKEN](): void {
    JwtService.destroyToken();
  }

  @Mutation
  [Mutations.SET_CREDENTIALS](payload: string): void {
    window.localStorage.setItem("user", payload);
  }

  @Mutation
  [Mutations.REMOVE_CREDENTIALS](): void {
    window.localStorage.removeItem("user");
  }

  @Action({ rawError: true })
  [Actions.LOGIN](credentials: {
    email: string;
    password: string;
  }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      ApiService.post(`/user/auth`, credentials)
        .then(({ data }) => {
          Promise.all([
            this.context.commit(
              Mutations.SET_TOKEN,
              data.content.token_identity
            ),
            this.context.commit(
              Mutations.SET_CREDENTIALS,
              JSON.stringify(data.content.user)
            ),
            this.context.commit(
              Mutations.SET_LAYOUT,
              data.content.user.roles.role_name
            ),
          ]).finally(() => {
            resolve(data);
          });
        })
        .catch((e) => {
          // this.context.commit(Mutations.SET_ERROR, err);
          reject(e);
        });
    });
  }

  @Action
  [Actions.LOGOUT](): void {
    this.context.commit(Mutations.REMOVE_TOKEN);
    this.context.commit(Mutations.REMOVE_CREDENTIALS);
    window.localStorage.removeItem("layout");
  }
}
