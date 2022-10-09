export const getRandomPercentage = () => {
    return Math.floor(Math.random() * 100) + 1 + '%'
}

export const getRandomColor = (min=0, max=256) => {
    const getSingleRandomValue = () => Math.floor(Math.random() * (max - min + 1) + min).toString(16);

    return `${getSingleRandomValue()}${getSingleRandomValue()}${getSingleRandomValue()}`
}