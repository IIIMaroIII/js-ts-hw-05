interface User {
  name: string
  friends: Array<string>
}

type Users = Array<User>
type GetUserWithFriendFn = (users: Users, friendName: string) => Users

const getUserWithFriend: GetUserWithFriendFn = (users, friendName) => users.filter((user) => user.friends.includes(friendName))

export default getUserWithFriend
/**
 * {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
 */
