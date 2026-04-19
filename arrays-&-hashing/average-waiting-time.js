function averageWaitingTime(customers) {
    let time = customers[0][0];
    let total = 0;

    for (let [a,t] of customers) {
        if (a > time) {
            time = a+t;
            total += time-a;
        } else {
            time += t;
            total += time-a;
        }
    }

    return total / customers.length;
};