document.addEventListener('DOMContentLoaded', function() {

    console.log('Ready Baby')
    let loction_bx = document.getElementById('loction_bx');
    let search_arrow = document.getElementById('search_arrow');
    let search_address = document.getElementById('search_address');

    search_address.addEventListener('focusin', () => {
        loction_bx.style.visibility = "visible";
        search_arrow.style.transform = "rotate(180deg)";
        loction_bx.style.opacity = 1;
    });
    search_address.addEventListener('focusout', () => {
        loction_bx.style.visibility = "hidden";
        search_arrow.style.transform = "rotate(0deg)";
        loction_bx.style.opacity = 0;
    });




    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let emails = document.getElementById('emails');
    let phones = document.getElementById('phones');
    let emails_phones = document.getElementById('emails_phones');
    phone.addEventListener('click', () => {
         emails_phones.classList.add('show_more');
         email.checked = false;
     });
     email.addEventListener('click', () => {
     emails_phones.classList.remove('show_more');
        phone.checked = false;
    });




    let country_button = document.getElementById('country_button');
    let country = document.getElementById('country');

    window.addEventListener('click', (e) => {
        if (e.target.id == "country_button") {
            country.classList.add('country_java');
        } else {
            country.classList.remove('country_java');
        }
    });
    let lag_btn = document.getElementById('lag_btn');
    let language_btn = document.getElementById('language_btn');

    window.addEventListener('click', (e) => {
        if (e.target.id == "lag_btn") {
            language_btn.classList.add('country_javas');
        } else {
            language_btn.classList.remove('country_javas');
        }
    });


    const btn_brands_left = document.getElementById('btn_brands_left');
    const btn_brands_right = document.getElementById('btn_brands_right');
    const brand_item = document.getElementById('brand_item');

    btn_brands_left.addEventListener('click', () => {
        brand_item.scrollLeft += 170;
        if (brand_item.scrollLeft > 0) {
            btn_brands_right.style.display = "flex";
        } else {
            btn_brands_right.style.display = "none";
        }
        if (brand_item.scrollLeft > 500) {
            btn_brands_left.style.display = "none";
        } else {
            btn_brands_left.style.display = "flex";
        }

    });
});





 let cards = document.getElementById('cards');
 let boes = cards.getElementsByClassName('boxes');
 let imges = cards.getElementsByClassName('imges');

 cards.addEventListener('mouseover', () => {
     boes.scrollLeft = 300;
     imges.style.width = "40px";
     imges.style.height = "15px";
     imges.src = 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp';
 });
 cards.addEventListener('mouseout', () => {
    boes.scrollLeft = -300;
    imges.style.width = "20px";
     imges.style.height = "20px";
     imges.src = 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp';
});