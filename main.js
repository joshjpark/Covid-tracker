prev = 0
dailyData = [1,3,6,10,15]

// for (let i = 0; i < a.length; i++) {
//     console.log("new is : ");
//     console.log(a[i] - prev);
//     prev = a[i];
// }

let low = 0;

const renderData = (item, index, arr) => {
    console.log("item is " + item);
    console.log("new patients is " + (item - low));
    low = item;
}

dailyData.map(renderData);

