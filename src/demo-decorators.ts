// function MiDecorador(target: Function) {
//     target.prototype.users = [{ id: 1, name: 'Alex', active: true }]
//     target.prototype.createUser = function(entity: object) {
//         target.prototype.users.push(entity)
//     }
// }

function MiDecorador() {
    return function(target: Function) {
        target.prototype.users = [{ id: 1, name: 'Alex', active: true }]
        target.prototype.createUser = function(entity: object) {
            target.prototype.users.push(entity)
        }
    }
}

export interface User {
    users: any[]
    createUser(entity: object): void
}

@MiDecorador()
export class User {}

const user = new User()
user.createUser({ id: 2, name: 'Shakira', active: false })
console.log(user.users)