interface User {
  name: string
  email: string
  balance: number
}

type Users = Array<User>
type GetUserNamesFn = (users: Users) => Array<string>

const getUserNames: GetUserNamesFn = (users) => users.map((user) => user.name)

export default getUserNames
/**
 * {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
 */
