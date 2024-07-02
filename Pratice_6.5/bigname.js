const CheckFriends = (array) => {
    let bigname = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > bigname.length) {
            bigname = element;
        }
    }
    return bigname;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const result = CheckFriends(friends);

console.log(result);
