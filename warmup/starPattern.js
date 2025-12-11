// * * * *
// * * * *
// * * * *
// * * * *

// for(let i = 0; i< 4; i++){
//   for(let j = 0; j<4; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for(let i = 0; i< 4; i++){
//   let row = ""
//   for(let j = 0; j<4; j++){
//     row = row +"* ";
//   }
//   console.log(row);
// }
// ------------------------------------------------------------
//
// *
// * *
// * * *
// * * * *

// for(let i = 0; i < 4; i++){
//   for(let j= 0; j<i+1; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// ------------------------------------------------------------
//       *
//     * *
//   * * * 
// * * * *

// for(let i = 0; i < 4; i++){
//   for(let j= 0; j<4-i; j++){
//     process.stdout.write(" ");
//   }
//   for(let k = 4 ; k>4-i; k--){
//     process.stdout.write("*");
//   }
//   console.log();
// }
// ------------------------------------------------------------
// 1
// 12
// 123
// 1234

  // for(let i =1; i<5; i++){
  //   for(let j= 1; j<=i; j++){
  //     process.stdout.write(j.toString());
  //   }
  //   console.log();
  // }

// ------------------------------------------------------------
// 1
// 22
// 333
// 4444

// for(let i = 1;  i<5; i++){
//   for(let j = 1; j<=i; j++){
//     process.stdout.write(i.toString());
//   }
//   console.log();
// }
// ------------------------------------------------------------
// 1
// 21
// 321
// 4321

// for(let i = 1;  i<5; i++){
//   for(let j = i; j>=1; j--){
//     process.stdout.write(j.toString());
//   }
//   console.log();
// }
// ------------------------------------------------------------
// 1234
// 123
// 12
// 1

// for(let i = 1;  i<5; i++){
//   for(let j = 1; j<=5-i; j++){
//     process.stdout.write(j.toString());
//   }
//   console.log();
// }
// ------------------------------------------------------------
// 1
// 10
// 101
// 1010

// for(let i = 1; i<=5;i++){
//   for(let j = 1; j<=i; j++){
//     if(j%2 ==0){
//       process.stdout.write("0 ");
//     }else{
//       process.stdout.write("1 ");
//     }
//   }
//   console.log();
// }
// ------------------------------------------------------------
// 1
// 01
// 010
// 1010
// 10101

for(let i = 0; i<6; i++){
  for(let j = 0; j< i; j++){
    if((i+j) % 2 == 0){
      process.stdout.write("1 ");
    }else{
      process.stdout.write("0 ");
    }
  }
  console.log();
}
// ------------------------------------------------------------
// A
// AB
// ABC
// ABCD

// for(let i = 0; i<4; i++){
//   for(let j = 0; j<=i; j++){
//     process.stdout.write(String.fromCharCode(65 + j));
//   }
//   console.log();
// }