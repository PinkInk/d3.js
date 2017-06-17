// splice null values in where there is no data
data = [1,2,4,5,7,8,10,11,12,13,17,22];

for (i=0 ; i<data.length-1 ; i++) {
    if (data[i+1]-data[i]>1) {
        data.splice(i+1, 0, NaN);
        i += 1;
    }

}
