function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu_1").classList.toggle("cross")
}
$(".parentslider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});
const accordian = document.querySelectorAll(".Accordian");

accordian.forEach(e => {
    e.addEventListener("click", function () {
        const acc = document.querySelector(".Accordian.active");
        e.classList.toggle("active");
        acc && acc.classList.remove("active");
    })

})

