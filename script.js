// Loader
gsap.to("#loader", {
    opacity: 0,
    duration: 1.5,
    delay: 1,
    onComplete: () => {
        document.getElementById("loader").style.display = "none";
    }
});

// Hero images slide-in
gsap.utils.toArray(".hero-image").forEach((image, i) => {
    gsap.from(image, {
        x: i % 2 === 0 ? -200 : 200,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: image,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});
