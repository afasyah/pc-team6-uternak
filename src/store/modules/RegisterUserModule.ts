import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

export interface PersonalInformation {
  name: string;
  company: string;
  email: string;
  phone_number: string;
  gender: string | null;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface PaymentInformation {
  type: "credit" | "referral" | "platiot";
  name: string;
  email: string;
  address_1: string;
  address_2: string;
  zip: string;
  country: string;
  city: string;
  state: string;
  referral_token: string;
}

export interface Register {
  step1: PersonalInformation;
  step2: Credentials;
  step3: PaymentInformation;
}

interface RegisterUser {
  register: Register;
}

@Module
export default class LayoutModule extends VuexModule implements RegisterUser {
  register = window.localStorage.getItem("ut_user-register")
    ? JSON.parse(window.localStorage.getItem("ut_user-register") as string)
    : {
        step1: {
          name: "",
          company: "",
          email: "",
          phone_number: "",
          gender: null,
        },
        step2: {
          username: "",
          password: "",
        },
        step3: {
          type: "credit",
          name: "",
          email: "",
          address_1: "",
          address_2: "",
          zip: "",
          country: "",
          city: "",
          state: "",
          referral_token: "",
        },
      };

  /**
   * Get Register Data
   * @returns object
   */
  get getRegisterData(): Register {
    return this.register;
  }

  /**
   * Get Step 1 Register Data
   * @returns object
   */
  get getStep1RegisterData(): PersonalInformation {
    return this.register.step1;
  }

  /**
   * Get Step 2 Register Data
   * @returns object
   */
  get getStep2RegisterData(): Credentials {
    return this.register.step2;
  }

  /**
   * Get Step 3 Register Data
   * @returns object
   */
  get getStep3RegisterData(): PaymentInformation {
    return this.register.step3;
  }

  @Mutation
  [Mutations.SET_REGISTER_DATA](payload: Register): void {
    this.register = payload;
  }

  @Mutation
  [Mutations.SET_STEP_1_REGISTER_DATA](payload: PersonalInformation): void {
    this.register.step1 = payload;
  }

  @Mutation
  [Mutations.SET_STEP_2_REGISTER_DATA](payload: Credentials): void {
    this.register.step2 = payload;
  }

  @Mutation
  [Mutations.SET_STEP_3_REGISTER_DATA](payload: PaymentInformation): void {
    this.register.step3 = payload;
  }

  @Action({ rawError: true })
  [Actions.UPDATE_REGISTER_DATA](payload: Register): void {
    this.context.commit(Mutations.SET_REGISTER_DATA, payload);
  }

  @Action({ rawError: true })
  [Actions.UPDATE_STEP_1_REGISTER_DATA](payload: PersonalInformation): void {
    this.context.commit(Mutations.SET_STEP_1_REGISTER_DATA, payload);
  }

  @Action({ rawError: true })
  [Actions.UPDATE_STEP_2_REGISTER_DATA](payload: Credentials): void {
    this.context.commit(Mutations.SET_STEP_2_REGISTER_DATA, payload);
  }

  @Action({ rawError: true })
  [Actions.UPDATE_STEP_3_REGISTER_DATA](payload: PaymentInformation): void {
    this.context.commit(Mutations.SET_STEP_3_REGISTER_DATA, payload);
  }

  @Action({ rawError: true })
  [Actions.SIGN_UP](): Promise<void> {
    const url = "/user/register";

    return new Promise((resolve, reject) => {
      ApiService.post(url, {
        fullName: this.register.step1.name,
        organization: this.register.step1.company,
        email: this.register.step1.email,
        // phone_number: this.register.step1.phone_number,
        gender: this.register.step1.gender,
        username: this.register.step2.username,
        password: this.register.step2.password,
      })
        .then((res) => {
          this.context.commit(Mutations.SET_REGISTER_DATA, {
            step1: {
              name: "",
              company: "",
              email: "",
              phone_number: "",
              gender: null,
            },
            step2: {
              username: "",
              password: "",
            },
            step3: {
              type: "credit",
              name: "",
              email: "",
              address_1: "",
              address_2: "",
              zip: "",
              country: "",
              city: "",
              state: "",
              referral_token: "",
            },
          });
          resolve(res.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}
