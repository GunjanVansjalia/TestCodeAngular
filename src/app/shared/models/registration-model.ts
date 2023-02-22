export class RegistrationModel {
  firstName: string;
  lastName: string;
  state: string;
  email: string;
  subscribe: boolean;

  constructor(data?: Partial<RegistrationModel>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
