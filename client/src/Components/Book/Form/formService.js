let count = 0;
    const adultsOptions = Array(10).fill(null).map((option) =>  count += 1);
    count = 0;
    const childrenOptions = Array(10).fill(null).map((option) => count += 1);
    count = 0;
    const roomOptions = Array(30).fill(null).map((option) => <option key={'rooms' + count + 1} >{count += 1}</option>);

    export  {
        adultsOptions,
        childrenOptions,
        roomOptions
    }