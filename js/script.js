const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select media stream
async function selectMediaStrem() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadeddata = () => {
			videoElement.play();
		};
	} catch (error) {
		console.log("something went wrong", error);
	}
}

button.addEventListener("click", async () => {
	// Disable button and launch PnP
	button.disabled = true;
	await videoElement.requestPictureInPicture();
	// Reset button
	button.disabled = false;
});

window.onload = selectMediaStrem();
