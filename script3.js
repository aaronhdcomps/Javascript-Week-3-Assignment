// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let row = "";

for (let i = 1; i <= 8; i++){
    if (i % 2 == 0) {
        row = " # # # #"
    }
    else {
        row = "# # # # "
    }
    console.log(row);
}
