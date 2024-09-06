<style>

body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1px;
            max-width: 1600px;
            margin: auto;
        }
        .column {
            background: #fff;
            padding: 20px;
            border: 1px solid #ddd;
        }

        header {
            background: #333;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #0779e4 3px solid;
        }
        header a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }
        header ul {
            padding: 0;
            list-style: none;
        }
        header li {
            display: inline;
            padding: 0 20px 0 20px;
        }
        header .branding {
            float: left;
        }
        header .branding h1 {
            margin: 0;
        }
        header nav {
            float: right;
            margin-top: 10px;
        }
        .content {
            padding: 20px;
            background: #fff;
            margin-top: 20px;
        }
        h1, h2 {
            color: #333;
        }
        p {
            margin: 20px 0;
        }
        strong {
            color: #000;
        }
        ul {
            list-style-type: disc;
            margin: 0;
            padding: 0;
        }
        ul li {
            margin: 10px 0;
            padding-left: 20px;
        }

        video {
            width: 100%;
            height: auto;
        }

        ul li strong {
            color: inherit;
        }

        .constant-size {
    width: 600px; /* Set your desired width */
    height: 600px; /* Set your desired height */
    object-fit: cover; /* This ensures the image maintains aspect ratio and fills the container2 */
}


        @media (max-width: 768px) {
            .container2 {
                grid-template-columns: 1fr;
            }
        }

body video {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
        }
    }

    /* Add this CSS to your stylesheet */
.dark-font2 {
    color: #00008B; /* Dark blue color */
}


.light-font {
    font-size: 18px; /* Adjust this value to increase or decrease the font size */
  }

  .blue-font2 {
    background-color: #00008B; /* Dark blue background color */
}


    /*
    .custom-bg {
            background-image: url('img/wall3d.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
            */

        .custom-bg {
        background-image: url('img/walllogo4.jpg');
        /*background-size: contain; /* This will make the entire image visible without cropping */
        background-size: 100% auto; /* Stretches the image horizontally to cover the width */
        background-repeat: no-repeat;
        background-position: center;
       /* background-attachment: fixed; /* This will make the background image fixed when scrolling */
        }




        .bg-image {
    background-image: url('img/wall3d.jpg'); /* Replace with the path to your image */
    background-size: cover; /* Ensure the background covers the entire element */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the background from repeating */
    position: absolute;
}




/* .bg-image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5); /* Adjust the opacity here (0.5 means 50% opacity) */
*/


.nav-link-custom {
    color: #FFD700; /* Dark yellow color */
    font-weight: bold; /* Optional: Make the text bold */
}

.navbar-nav .nav-link {

    color: #d4a017 !important; /* Dark yellow color with !important to override other styles */
    font-size: 28px; /* Adjust the size as needed */

    
}

#custom-navbar .nav-link {
    color: #FCDC5A !important; /* Dark yellow color with !important to override other styles */
    font-size: 18px !important; /* Increase font size with !important to override other styles */
}

#custom-navbar .nav-link:hover {
    color: #0000FF !important; /* Blue color on hover */
}



.navbar-nav .nav-link:hover {
    color: #0000FF !important; /* Blue color on hover */
}

.constant-size {
    width: 600px; /* Set your desired width */
    height: 600px; /* Set your desired height */
    object-fit: cover; /* This ensures the image maintains aspect ratio and fills the container2 */
}


        @media (max-width: 768px) {
            .container2 {
                grid-template-columns: 1fr;
            }
        }

        .custom-color {
            color: #D9BA5F;
        }

</style>