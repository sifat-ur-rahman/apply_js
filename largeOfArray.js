function bestFriend(myFriend) {
    let firstFriend = myFriend[0];
    for (let i = 0; i < myFriend.length; i++) {
        let friendName = myFriend[i];
        if (friendName.length > firstFriend.length) {
            firstFriend = friendName;
        }
    }
    return firstFriend;
}
let myFriendList = ['a', 'ab', 'abc', 'abcd']
let inputFriendList = bestFriend(myFriendList);
console.log(inputFriendList)