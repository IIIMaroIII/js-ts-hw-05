interface User {
  name: string
  friends: string[]
  gender: string
}

type Users = User[]
type SortByDescendingFriendCountFn = (users: Users) => Users

const sortByDescendingFriendCount: SortByDescendingFriendCountFn = (users) =>
  users.toSorted((a, b) => b.friends.length - a.friends.length)

export default sortByDescendingFriendCount
/**
 * {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
 */
