const calculateAngle=(nowPosition:[number,number],nextPosition:[number,number])=>{
    return Math.atan2((nextPosition[1]-nowPosition[1]),(nextPosition[0]-nowPosition[0]))*(180/Math.PI)
}

export default calculateAngle