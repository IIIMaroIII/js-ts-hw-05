interface User {
  name: string
  gender: Gender
  balance: number
}

type Gender = 'male' | 'female'
export type Users = User[]
type GetTotalBalanceByGenderFn = (users: Users, gender: Gender) => number

const getTotalBalanceByGender: GetTotalBalanceByGenderFn = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((acc, value) => (acc += value), 0)

export default getTotalBalanceByGender

/**
 * {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
 */
