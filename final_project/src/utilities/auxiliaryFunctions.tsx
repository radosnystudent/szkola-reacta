const shuffleArray = (array: any[]) => {
    for (let i: number = array.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        const temp: any = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

export { shuffleArray };
