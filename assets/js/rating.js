const testimonialData = [
    {
        author: "Capybara TBK",
        quote: "Good for us!",
        image: "https://media.istockphoto.com/id/1377978280/photo/capybara.jpg?b=1&s=170667a&w=0&k=20&c=magY6il9oxV3eTJMuMNH-0YHLo-NxNn4XLsBNjHL6og=",
        rating: 5
    },
    {
        author: "Faris",
        quote: "IEU NAON KOTJAK!!!",
        image: "https://www.guystuffcounseling.com/hs-fs/hubfs/wife-believes-she-is-married-to-an-angry-man.jpg?width=800&height=564&name=wife-believes-she-is-married-to-an-angry-man.jpg",
        rating: 1
    },
    {
        author: "Elon Musk",
        quote: "so so",
        image: "https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/07/6368c6c12ff8c-pemilik-twitter-elon-musk_665_374.jpg",
        rating: 3
    },
    {
        author: " Jonathan Joestar ",
        quote: "saya sedih :(",
        image: "https://previews.123rf.com/images/bowie15/bowie151401/bowie15140100080/39843138-sad-man.jpg",
        rating: 2
    },
    {
        author: "Celina",
        quote: "(>.<)",
        image: "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80",
        rating: 4
    },
]


function allTestimonials() {
    let testimonialHTML = '';

    testimonialData.forEach((item) => {
        testimonialHTML += `<div class="testimonial">
                     <img src="${item.image}" class="profile-testimonial" />
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialHTML;
}

allTestimonials()


function filterTestimonials(rating) {
    let testimonialHTML = '';

    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}