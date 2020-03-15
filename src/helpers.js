export const getHabitsInOrderNoIds = (stackId, stacks, habits) => {
    let habitOrder = stacks[stackId].habitKeys;
    let newHabits = habitOrder.map(key => {
        return habits[key];
    })
    return newHabits;
}

export const getHabitsInOrderedArray = (stackId, habits) => {
    // ! catch empty stacks
    let allHabits = Object.entries(habits);
    let habitList = allHabits.filter(habit => {
        return habit[1].stackKey === stackId;
    });
    let orderedList = [];
    for (var i = 0; i < habitList.length; i++) {
        orderedList.push(habitList.find(habit => habit[1].order === i))
    }
    return orderedList;
}

export const getStacksInOrderedArray = (stacks) => {
    let orderedList = [];
    let stackList = Object.entries(stacks);
    for (var i = 0; i < stackList.length; i++) {
        orderedList.push(stackList.find(stack => stack[1].order === i))
    }
    return orderedList;
}
