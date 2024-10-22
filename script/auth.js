


//Hide Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
    }
}

handlePreloader()

function showLoader() {
    document.getElementById("loginLoader").classList.add("active");
}

function hideLoader() {
    document.getElementById("loginLoader").classList.remove("active");
}



function register() {

    showLoader()

    const baby_name = document.getElementById('baby_name').value;
    const baby_age = document.getElementById('baby_age').value;
    const baby_gender = document.getElementById('baby_gender').value;
    const mother_name = document.getElementById('mother_name').value;
    const mother_phone = document.getElementById('mother_phone').value;
    const mother_email = document.getElementById('mother_email').value;
    const baby_picture = document.getElementById('baby_picture');
    const baby_card = document.getElementById('baby_card');

    const b_pic = baby_picture.files[0];
    const b_card = baby_card.files[0];

    // Validate input (add your validation logic here)
    if (baby_name === "" || baby_age === "" || baby_gender === "" || mother_name === "" || mother_phone === "" || mother_email === "") {
        hideLoader()
        Swal.fire({
            title: "Error",
            text: 'Input fields cannot be left blank',
            icon: "error"
        });
        return;
    }

    if (!b_pic || !b_card) {
        hideLoader()
        Swal.fire({
            title: "Error",
            text: 'Please upload an image.',
            icon: "error"
        });
        return;
    }

    const formData1 = new FormData();
    formData1.append('file', b_pic);
    formData1.append('upload_preset', 'poliocontest');

    const formData2 = new FormData();
    formData2.append('file', b_card);
    formData2.append('upload_preset', 'poliocontest');


    axios.post('https://api.cloudinary.com/v1_1/daf6mdwkh/auto/upload', formData1)
        .then(response1 => {
            const baby_picture_url = response1.data.url;
            console.log(response1.data.url)

            return axios.post('https://api.cloudinary.com/v1_1/daf6mdwkh/auto/upload', formData2)
                .then(response2 => {

                    const baby_card_url = response1.data.url;
                    console.log(response2.data.url)



                    const babyData = {
                        name: baby_name,
                        age: baby_age,
                        gender: baby_gender,
                        motherName: mother_name,
                        phoneNumber: mother_phone,
                        email: mother_email,
                        babyPicture: baby_picture_url,
                        immunizationCard: baby_card_url
                    };
        
                    axios.post('https://rotary-server-siq2.onrender.com/auth/register', babyData)
                        .then(response => {
                            console.log(response)
        
                            if (response.data['error'] === true) {
                                hideLoader()
                                Swal.fire({
                                    title: "Error",
                                    text: response.data['message'],
                                    icon: "error"
                                });
                            } else {
                                hideLoader()
                                Swal.fire({
                                    title: "Success",
                                    text: "Uploaded successfully",
                                    icon: "success"
                                });
                                setTimeout(() => {
                                    window.location.href = "/vote.html"
                                }, 2000);
                               
                            }
                        })
                        .catch(error => {
                            hideLoader()
                            Swal.fire({
                                title: "Error",
                                text: error,
                                icon: "error"
                            });
                        })
                        .finally(() => {
                            // Hide the loader when the request is complete (success or failure)
                            hideLoader()
                        });

                })

        
        })
        .catch(error => {
            hideLoader()
            Swal.fire({
                title: "Error",
                text: error,
                icon: "error"
            });
        })
        .finally(() => {
            // Hide the loader when the request is complete (success or failure)
            hideLoader()
        });
}