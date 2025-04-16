// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let index = 0; index < 20; index++) {
      console.log(index);
      if (index == 5) {
          console.log(`index is ${index} this is inside if we will still continue`);
          continue
      }
      console.log(`index is ${index} this is outside of the if statement`);

}