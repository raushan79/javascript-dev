var rotate = function(nums, k) {
    let n= nums.length;
    console.log(`total length : ${n}`)
    for(let i=0; i<k; i++){
        console.log(`k totation of ${i}`)
        console.log(`last value : ${nums[n-1]}`)
        let tmep = nums[n-1]
        for(let j=n-1; j>0; j--){
            console.log(`array iteration : ${j}, value ; ${nums[j]}`)
            nums[j]=nums[j-1]
        }
        nums[0] = tmep;
    }
    return nums;
};

a = [1,2,3,4,5,6,7]
d = 3

console.log(rotate(a,d));