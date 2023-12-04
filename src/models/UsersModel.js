import Model from "./Model";
// import Model from "./model";

export default class User extends Model {
    resource() {
        return "users";
    }

    teste() {
        return "teste";
    }
}