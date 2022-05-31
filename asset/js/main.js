$(function(){
  $(window).mousemove(function(e){
    e.preventDefault();
    gsap.to('.bg-title',{
      x:-(e.clientX - $(window).innerWidth()/2)/50,
      y:-(e.clientY - $(window).innerHeight()/2)/50,
    })
    gsap.to('.bg-image',{
      x:(e.clientX - $(window).innerWidth()/2)/20,
      y:(e.clientY - $(window).innerHeight()/2)/20,
    })
    gsap.to('.bg-image img',{
      x:(e.clientX - $(window).innerWidth()/2)/50,
      y:(e.clientY - $(window).innerHeight()/2)/50
    })
    gsap.to('.bg-area .bg',{
      x:-(e.clientX - $(window).innerWidth()/2)/35,
      y:-(e.clientY - $(window).innerHeight()/2)/35,
      onComplete:function(){
        gsap.to('.bg-area .bg',{
          x:0,y:0
        })
      }
    })
    
  })
    

    var slide01 = new Swiper(".slide01", {
      direction: "vertical",
      touchRatio:0,
    });
    var slide02 = new Swiper(".slide02", {
      direction: "vertical",
      touchRatio:0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
      },
    });

    var slide03 = new Swiper(".slide03", {
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });

      circle =gsap.to('.slide03',5,{
        ease:Power1,
        // stagger:2,
        // repeat:-1,
      onComplete:function(){
          slide03.slideNext();
          slide01.slideNext();
          slide02.slideNext();
      }
    })
    slide03.on('slideChange',function(){
      circle.restart();
    })
    slide03.controller.control = slide02;
    slide02.controller.control = slide01;

    $('.sub-area section').hover(function(){
        $(this).removeClass('leave');
    },function(){
        $(this).addClass('leave');
    })



    splitText = new SplitType('.bg-title, .badge, .title, .contact-area a'
    ,{types: 'words, chars', absolute: false,});

    //sc-info
    scrollMoInfo = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-info',
        start:'-10% top', //[트리거기준,윈도우기준]
        // end:'75% top',
        // markers:true,
        },
    })
    scrollMoInfo.to('.bg-title .char',.3,{y:0,opacity:1,stagger:.1})

    //sc-info cont-area
    scrollMoInfoCont = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-info .cont-area',
        start:'top 70%', //[트리거기준,윈도우기준]
        // end:'75% top',
        // markers:true,
        },
    })
    scrollMoInfoCont.to('.sc-info .badge .char, .sc-info .cont-area *',.5,{y:0,opacity:1,stagger:.05})
    
    //sc-goods
    scrollMoGoods = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-goods',
        start:'10% 70%', //[트리거기준,윈도우기준]
        // end:'75% top',
        // markers:true,
        },
    })
    scrollMoGoods.to('.sc-goods .badge .char, .slide-tit, .slide-txt, .slide-img',.5,{y:0,opacity:1,stagger:.05})
    
    //sc-collection
    scrollMoColl = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-collection',
        start:'15% 70%', //[트리거기준,윈도우기준]
        // end:'25% top',
        // markers:true,
        },
    })
    scrollMoColl.to('.sc-collection .title .char, .cont-area .image-box, .link-detail'
    ,.5,{y:0,opacity:1,stagger:.1})

    //sc-news
    scrollMoNews = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-news',
        start:'10% 70%', //[트리거기준,윈도우기준]
        // end:'25% top',
        // markers:true,
        },
    })
    scrollMoNews.to('.sc-news .title .char, .sc-news a',.5,{y:0,opacity:1,stagger:.05})
    .to('.bd-top, .bd-bottom, .sc-news .link-detail',.5,{x:0,opacity:1,stagger:.1})

    //sub-area
    scrollMoSub = gsap.timeline({
      scrollTrigger:{
        trigger:'.sub-area',
        start:'15% 70%', //[트리거기준,윈도우기준]
        // markers:true,
        },
    })
    scrollMoSub.to('.sub-area .side-bar',.5,{scaleY:1})
    .to('.sub-area .title .char',.5,{y:0,opacity:1,stagger:.05})
    .to('.sub-area *',.5,{y:0,opacity:1})

    //contract-area
    scrollMoCTR = gsap.timeline({
      scrollTrigger:{
        trigger:'.contact-area',
        start:'45% 70%', //[트리거기준,윈도우기준]
        // end:'65% 70%',
        },
    })
    scrollMoCTR.to('.contact-area .char',.5,{y:0,opacity:1,stagger:.05})


    //footer-top
    scrollMoFtTop = gsap.timeline({
      scrollTrigger:{
        trigger:'.top-area',
        start:'15% 70%', //[트리거기준,윈도우기준]
        // end:'25% top',
        },
        defaults:{
          ease:'ease-in-out'
        }
    })
    scrollMoFtTop.to('.top-area .gnb-item',.7,{opacity:1})

    //footer-bottom
    scrollMoFtBt = gsap.timeline({
      scrollTrigger:{
        trigger:'.bottom-area',
        start:'-80% 70%', //[트리거기준,윈도우기준]
        // markers:true,
        },
        defaults:{
          ease:'ease-in-out'
        }
    })
    scrollMoFtBt.to('.bottom-area .ft-logo, .ft-sns-area a',.5,{opacity:1,stagger:.1})

    $('.more01').mouseover(function(){
      $('.more01').addClass('move');
    })
    $('.more01').mouseleave(function(){
      $('.more01').removeClass('move');
    })

    $('.more02').mouseover(function(){
      $('.more02').addClass('move');
    })
    $('.more02').mouseleave(function(){
      $('.more02').removeClass('move');
    })




   
    ScrollTrigger.refresh();

})