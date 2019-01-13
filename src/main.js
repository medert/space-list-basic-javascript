// Meets Expectations
let researcherSpaceItems = [new SpaceItem("space rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00) ];


function summary(arr){
  let msg = "Dear Researcher,\n\nI bought you:\n\n";
  let total = 0;
arr.forEach((item)=>{
    let subtotal = item.price * item.qty;
    if (item.qty > 1){
      msg += `${item.qty} ${item.name}s - $${subtotal.toFixed(2)}\n`;
    } else {
      msg += `${item.qty} ${item.name} - $${subtotal.toFixed(2)}\n`;
    }
    total += item.qty * item.price.toFixed(2);
  });

  return msg += `\nYou owe me $${total.toFixed(2)}`;
}

console.log(summary(researcherSpaceItems));

// Optional
let inventoryLab1 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 3,
  insect: 1,
  soilSample: 5
};

let inventoryLab2 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 6,
  insect: 10,
  soilSample: 5
};
