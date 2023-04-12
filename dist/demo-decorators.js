// function MiDecorador(target: Function) {
//     target.prototype.users = [{ id: 1, name: 'Alex', active: true }]
//     target.prototype.createUser = function(entity: object) {
//         target.prototype.users.push(entity)
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MiDecorador() {
    return function (target) {
        target.prototype.users = [{ id: 1, name: 'Alex', active: true }];
        target.prototype.createUser = function (entity) {
            target.prototype.users.push(entity);
        };
    };
}
let User = class User {
};
User = __decorate([
    MiDecorador()
], User);
export { User };
const user = new User();
user.createUser({ id: 2, name: 'Shakira', active: false });
console.log(user.users);
