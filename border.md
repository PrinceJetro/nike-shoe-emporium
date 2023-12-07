<!DOCTYPE html>
<html>
<head>
<style>
body {
  height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  background: #222;a
}

.m /* Apply the gradient border and rounded corners to the div */{
    width: 250px; /* Adjust the width and height as needed */
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(to bottom right, #FE53BB, #08f7fe); /* Set your desired gradient colors here */
    border: 5px solid transparent; /* Set the border width and make it transparent */
    background-clip: content-box; /* This clips the background within the border */
    display:flex;
    justify-content: center;
    align-items: center
}

.m img{
	width: 240x; /* Adjust the width as needed */
    height: 240px; /* Adjust the height as needed */
     border-radius: 50%/52%; /
    object-fit: cover; /* Ensures the image fits within the 
}

</style>
</head>
<body>

<div class="m">
    <img src="https://picsum.photos/200">
</div>

</body>
</html>


