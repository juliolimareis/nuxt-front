<template>
  <div
    class="bgimg text-white bg-black border-2 border-red-500"
  >
    <img
      class="w-full h-full"
      src="~assets/images/cover.jpg"
      alt="cover"
    >

    <div class="topleft text-white" />

    <div class="middle">
      <h1 class="font-bold">
        COMING SOON
      </h1>

      <hr>

      <p
        class="font-bold text-3xl"
      >
        {{ countDown }}
      </p>

      <Button
        class="m-3 bg-green-500"
        @click="useRouter().push('/components')"
      >
        Components
      </Button>

      <p class="font-bold mt-4" />
    </div>
    <div class="bottomleft" />
  </div>
</template>

<script lang="ts" setup>
// Set the date we're counting down to
const countDownDate = new Date("Aug 28, 2023 15:37:25").getTime();
const countDown = ref("35 days");

// Update the count down every 1 second
const interval = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now an the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  countDown.value = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(interval);
    countDown.value = "EXPIRED";
  }
}, 1000);

</script>

<style scoped>

.bgimg {
  /* Background image */
  /* background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg'); */
  /* Full-screen */
  /* height: 100%; */
  /* Center the background image */
  /* background-position: center; */
  /* Scale and zoom in the image */
  /* background-size: cover; */
  /* Add position: relative to enable absolutely positioned elements inside the image (place text) */
  /* position: relative; */
  /* Add a white text color to all elements inside the .bgimg container */
  /* color: black; */
  /* Add a font */
  font-family: "Courier New", Courier, monospace;
  /* Set the font-size to 25 pixels */
  font-size: 25px;
}

/* Position text in the top-left corner */
.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

/* Position text in the bottom-left corner */
.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

/* Position text in the middle */
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the <hr> element */
hr {
  margin: auto;
  width: 40%;
}
</style>