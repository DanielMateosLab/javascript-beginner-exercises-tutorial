var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => (bulletPosition == spinnerPosition 
    ? "You're dead!"
    : "Keep playing!");

console.log(fireGun(spinChamber()));