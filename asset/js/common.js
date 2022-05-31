$(function(){
  // $('.sns-area .link-insta').mouseover(function(e){
  //     e.preventDefault();
  //     if(dd){

  //     }
  //     $('.sns-area .link-insta').addClass('left');
  // })
  // $('.sns-area .link-insta').mouseleave(function(e){
  //     e.preventDefault();
  //     $('.sns-area .link-insta').addClass('right');
  // })

  // 헤더와 메인 고정
  

  gsap.to('.logo,.gnb-area,.sns-area,.fix-top',{
          scrollTrigger:{
              trigger:'footer',
              start:'-50px 90%', //[트리거기준,윈도우기준]
              end:'top 85%', //[]
            //   markers:true,
              scrub:2
          },
          opacity:'0',stagger:0.1,duration:1
      })
  gsap.to('.side-gnb-area .gnb-item',{
          scrollTrigger:{
              trigger:'.sc-goods',
              start:'top 90%', //[트리거기준,윈도우기준]
              end:'top 85%', //[]
            //   markers:true,
              scrub:2
          },
          opacity:'0',stagger:0.2,
      })
//   gsap.to('.gnb-area',{
//           scrollTrigger:{
//               trigger:'footer',
//               start:'top bottom', //[트리거기준,윈도우기준]
//               end:'10px bottom', //[]
//               // markers:true,
//               scrub:1
//           },
//           opacity:'0',
          
//       })
//   gsap.to('.side-gnb-area',{
//           scrollTrigger:{
//               trigger:'.sc-goods',
//               start:'top 100%', //[트리거기준,윈도우기준]
//               // markers:true,
//             //   scrub:1
//           },
//           opacity:'0',
          
//       })
//   gsap.to('.sns-area',{
//           scrollTrigger:{
//               trigger:'footer',
//               start:'top bottom', //[트리거기준,윈도우기준]
//               // markers:true,
//               scrub:1
//           },
//           opacity:'0', 
//       })
//   gsap.to('.top',{
//           scrollTrigger:{
//               trigger:'footer',
//               start:'top bottom', //[트리거기준,윈도우기준]
//               // markers:true,
//               scrub:1
//           },
//           opacity:'0', 
//       })

      // gnbMo = gsap.timeline({
      //     defaults:{
      //         ease:'ease-in'
      //     }
      // })
      // gnbMo.addLabel('m1')
      // .to('.gnb-wrap',{display:'block',opacity:1},'m1')
      // .to('.inside-gnb',{right:'0',opacity:1},.05,'m1')
      // .fromTo('.gnb-item',{opacity:0,x:-100},{opacity:1,x:0},.1,'m1')
      // gnbMo.pause();
  
      // $('.btn-gnb').click(function(e){
      //         $('body').addClass('noscroll');
      //         e.preventDefault();
      //         gnbMo.play();
      //         gsap.set('html,body',{scrollTop:0});
      // }) 

      menuMotion = gsap.timeline({
        defaults:{
          delay:.3
        }
      })
      menuMotion.fromTo('.inside-gnb .underline',1,{
        opacity:0,x:100
      },{
        delay:.5,
        opacity:1,x:0,
        stagger:0.1 //.gnb-item 사이간격
      })
      menuMotion.pause();
      
          $('.btn-gnb').click(function(e){
              e.preventDefault();
              $('.inside-gnb').toggleClass('on');
              $('.gnb-wrap').toggleClass('on');
              $(this).toggleClass('rot');
              $('body').toggleClass('noscroll');
              menuMotion.restart();
          })
          $('.gnb-wrap::before').click(function(e){
              e.preventDefault();
              $('.gnb-wrap').removeClass('on');
              $('.inside-gnb').removeClass('on');
          })
      
      // $('.btn-gnb').click(function(e){
      //     e.preventDefault();
      //     $(this).find('.bar-x1').toggleClass('on');
      //     $(this).find('.bar-x2').toggleClass('on');
      //     $('.gnb-wrap').toggleClass('on');
      //     $(this).toggleClass('rot');
      //     $('body').toggleClass('noscroll');
      // })

      
      $('.gnb-area').mouseover(function(e){
          e.preventDefault();
          $('.gnb-area .x1-1').addClass('move');
          $('.gnb-area .x1-2').addClass('move');
      })
      $('.gnb-area').mouseleave(function(e){
          e.preventDefault();
          $('.gnb-area .x1-2').removeClass('move');
          $('.gnb-area .x1-1').removeClass('move');
      })
      $('.gnb-area').mouseover(function(e){
          e.preventDefault();
          $('.gnb-area .x2-1').addClass('move');
          $('.gnb-area .x2-2').addClass('move');
      })
      $('.gnb-area').mouseleave(function(e){
          e.preventDefault();
          $('.gnb-area .x2-2').removeClass('move');
          $('.gnb-area .x2-1').removeClass('move');
      })

      
      var targ=$('.sc-goods').offset().top - $(window).innerHeight();
      $(window).scroll(function(){
          curr=$(this).scrollTop();

          if (curr>targ) {
              $(".fix-top").addClass('up');
          } else {
            $(".fix-top").removeClass('up');
          }


      })
      $('.fix-top').on('click',function(e){
          e.preventDefault();
          if ($(this).hasClass('up')) {
              gsap.to('html,body',1,{ease:'sine',scrollTop:0})
          } else {
              gsap.to('html,body',1,{ease:'sine',scrollTop:targ+2})
          }
      })
})