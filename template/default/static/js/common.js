$(function () {
   var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: false,
      live: true
   });
   if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
      wow.init();
   }
   $(".wow").attr({"data-wow-duration": "0.6s"});
   $('.abou-intr .dn-bot .com-blo .blo-box').eq(0).attr('data-wow-delay', '0.1s').next().attr('data-wow-delay', '0.2s').next().attr('data-wow-delay', '0.3s')
   $('.abou-cul .dn-bot .com-blo .blo-box').eq(0).attr('data-wow-delay', '0.1s').next().attr('data-wow-delay', '0.2s').next().attr('data-wow-delay', '0.3s')

   $('.inde-app .sw-zong .sl2 .sl2-sw1 .swiper-slide').eq(1).attr('swiper-animate-delay', '0.15s')
   $('.inde-app .sw-zong .sl2 .sl2-sw1 .swiper-slide').eq(2).attr('swiper-animate-delay', '0.3s')
   $('.inde-app .sw-zong .sl2 .sl2-sw1 .swiper-slide').eq(3).attr('swiper-animate-delay', '0.45s')

   // 点击下一页
   $(document).on('click', '.com-to-next1', function () {
      $('html,body').animate({scrollTop: $('.com-arrive1').offset().top - $('.header').height()}, 400)
   })
// 头部点击搜索框
   $(document).on('click', '.header .header-sear', function () {
      layer.open({
         type: 1,
         title: false,
         area: ['auto', 'auto'],
         content: $('.lay-sear').html()
      });
   })
   // 头部移动端点击下拉菜单
   $(document).on('click', '.header .head-menu', function () {
      $(this).toggleClass('active');
      $('.header .header-dfr .header-nav').stop().slideToggle(200);
   })


   // 底部分享
   $(document).on('mouseenter', '.com-share1 .blo-box', function () {
      if ($(this).find(".newm").length > 0) {
         layer.tips($(this).find(".newm").html(), $(this), {
            tips: [3, '#fafafa'],
            time: 1000000
         });
      }
   }).on('mouseleave', '.com-share1 .blo-box', function () {
      layer.closeAll()
   })


   // 公用轮播
   $('.com-sw1').each(function () {
      var _this = $(this);
      new Swiper(_this.find('.swiper-container'), {
         // loop: true,
         slidesPerView: 'auto',
         autoHeight: true,
         autoplay: {
            delay: 8000,
            disableOnInteraction: false,
         },
         pagination: {
            el: _this.find('.swiper-pagination'),
            clickable: true,
         },
      })
   })


   $(window).scroll(function () {

      // if ($('.com-ban1 .com-nav1').length > 0) {
      //    if ($(this).scrollTop() > $('.com-ban1').height() - $('.header').height()) {
      //       $('.com-ban1 .com-nav1 .conta1').addClass('active')
      //
      //    } else {
      //       $('.com-ban1 .com-nav1 .conta1').removeClass('active')
      //
      //    }
      // }


   });

})

function myajaxSubmit(form, fun) {
   layer.msg('In the submission', {
      icon: 16
      , shade: 0.01,
      time: false
   });
   $(form).ajaxSubmit(function (res) {
      layer.closeAll();
      //eval("var res="+res);
      fun(res);
   });
}

function mypost(url, param, fun, nojson) {
   layer.msg('In the submission', {
      icon: 16
      , shade: 0.01,
      time: false
   });
   $.post(url, param, function (res) {
      layer.closeAll();
      fun(res);
   });
}

function myget(url, fun, nojson) {
   layer.msg('In the submission', {
      icon: 16
      , shade: 0.01,
      time: false
   });
   $.get(url, function (res) {
      layer.closeAll();
      //if(!nojson) eval("var res="+res);
      fun(res);
   });
}

/**
 * jquery全局函数封装
 */
(function ($) {

   /**
    * Jquery全局函数
    */
   $.extend({

      /**
       * 对象转URL
       */
      urlEncode: function (data) {
         var _result = [];
         for (var key in data) {
            var value = null;
            if (data.hasOwnProperty(key)) value = data[key];
            if (value.constructor === Array) {
               value.forEach(function (_value) {
                  _result.push(key + "=" + _value);
               });
            } else {
               _result.push(key + '=' + value);
            }
         }
         return _result.join('&');
      },

      /**
       * 操作成功弹框提示
       * @param msg
       * @param url
       */
      show_success: function (msg, url) {
         layer.msg(msg, {
            icon: 1
            , time: 1200
            // , anim: 1
            , shade: 0.5
            , end: function () {
               (url !== undefined && url.length > 0) ? window.location = url : window.location.reload();
            }
         });
      },

      /**
       * 操作失败弹框提示
       * @param msg
       * @param reload
       */
      show_error: function (msg, reload) {
         var time = reload ? 1200 : 0;
         layer.alert(msg, {
            title: '提示'
            , icon: 2
            , time: time
            , anim: 6
            , end: function () {
               reload && window.location.reload();
            }
         });
      },

   });

})(jQuery);