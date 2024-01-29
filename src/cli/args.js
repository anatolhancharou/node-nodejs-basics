const parseArgs = () => {
    const formattedVariables = process.argv
        .slice(2)
        .reduce((acc, curr, index, arr) => {
            return curr.startsWith('--')
                ? [...acc, `${curr.slice(2)} is ${arr[index + 1]}`]
                : acc;
        }, [])
        .join(', ');

    console.log(formattedVariables);
};

parseArgs();
