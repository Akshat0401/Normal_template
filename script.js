var timeline = gsap.timeline();

timeline.from("#nav h3", {
    y: -50,
    duration: 0.8,
    delay: 0.2,
    opacity: 0,
    stagger: 0.15
})  

timeline.from("#center h1", {
    x: -150,
    duration: 0.8,
    delay: 0.2,
    opacity: 0,
    stagger:0.15
})


timeline.from("img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.5,
    stagger:0.5
})