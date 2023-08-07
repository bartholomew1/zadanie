import BaseClass from "../baseClass";
import * as registration from "../selectors/registrationSelectors";
class Registration extends BaseClass {
  fillRegistrationForm(username, password, country, hobby, photo, info) {
    registration.username().type(username);
    registration.password().type(password);
    registration.country().select(country);
    registration.hobby().select(hobby);
    registration.photo().selectFile(photo);
    registration.info().type(info);
    registration.notice().click({ multiple: true });
  }
}

export default Registration;
