const arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

        const merged = [].concat(...arr);
        const sorted = merged.sort((a, b)=>a-b);


        console.log(sorted);  