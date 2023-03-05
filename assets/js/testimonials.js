class Testimonial {
    constructor(quote, image) {
        this._quote = quote
        this._image = image
    }

    get quote() {
        return this._quote
    }

    get image() {
        return this._image
    }

    get html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">${this.author}</p>
        </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, quote, image) {
        super(quote, image)
        this._author = author
    }

    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }

    get author() {
        return this._company + " Corporation"
    }
}

const testimonial1 = new AuthorTestimonial("The rock", "very well", "https://p4.wallpaperbetter.com/wallpaper/700/334/546/bodybuilder-dwayne-johnson-tattoos-5k-wallpaper-preview.jpg")

const testimonial2 = new AuthorTestimonial("Elon Musk", "Nice one", "https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/07/6368c6c12ff8c-pemilik-twitter-elon-musk_665_374.jpg")

const testimonial3 = new CompanyTestimonial("Capybara TBK", "Its okay", "https://media.istockphoto.com/id/1377978280/photo/capybara.jpg?b=1&s=170667a&w=0&k=20&c=magY6il9oxV3eTJMuMNH-0YHLo-NxNn4XLsBNjHL6og=")

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].html
}

document.getElementById("testimonials").innerHTML = testimonialHTML



