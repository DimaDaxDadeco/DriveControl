$(document).ready(function() {
  /*menu hover*/
  $('nav ul li').mouseenter(function() {
    var n = $(this).index();
    $(this).addClass('nobordr');
    $('nav ul li').eq(n-1).addClass('nobordr');
  })
  $('nav ul li').mouseleave(function() {
    var n = $(this).index();
    $(this).removeClass('nobordr');
    $('nav ul li').eq(n-1).removeClass('nobordr');
  })
  /*big slider*/
    if ($('.sliderContainer').length) {
      $('.sliderContainer').slick({
        dots: true,
        arrows: false,
        swipe: false
      });
    }
    $('.sliderItemSl').on('click', function() {
      $(this)
        .children('.info-slide')
        .toggleClass('view');
    });
    /* news slider*/
    if ($('.newsLiveSl').length) {
      $('.newsLiveSl').slick({
        infinite: true,
        autoplay: false
      });
    }
  /* toTop */
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
      });
      $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
  /*tabs*/
    $('.tabsControlLink').on('click', function(e) {
      e.preventDefault();
      var item = $(this).closest('.tabsControlItem'),
        contentItem = $('.tabsItem'),
        itemPosition = item.index();

        $('.tabsControlItem').eq(itemPosition-1)
          .addClass('noBorder')
          .siblings()
          .removeClass('noBorder');


      contentItem.eq(itemPosition)
        .add(item)
        .addClass('tabActive')
        .siblings()
        .removeClass('tabActive');

    });
    /*sliderPortfolio*/
    if ($('.sliderPortfolio').length) {
      $('.sliderPortfolio').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
      });
    }
    /*accordion*/
    $('.accordion-trigger').on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
        item = $this.closest('.accordion-item'),
        list = $this.closest('.accordion-list'),
        items = list.find('.accordion-item'),
        content = item.find('.accordion-inner'),
        otherContent = list.find('.accordion-inner'),
        duration = 0;

      if (!item.hasClass('accordionActive')) {

        items.removeClass('accordionActive');
        item.addClass('accordionActive');

        otherContent.stop(true,true).slideUp(duration);
        content.stop(true,true).slideDown(duration);
      } else {
        content.stop(true,true).slideUp(duration);
        item.removeClass('accordionActive');
      }
    })
  /*accordionTable*/
    $('.tableStatus table tr.click').on('click', function(e) {
      var
        $this = $(this),
        number = $this.index(),
        duration = 0;
        if (!$('.tableStatus table tr').eq(number+1).hasClass('click-item-active')) {
          $('.tableStatus table tr.click-item').stop(true,true).slideUp(duration);
          $('.tableStatus table tr').eq(number+1).stop(true,true).slideDown(duration);
          $('.tableStatus table tr').removeClass('click-item-active');
          $this.addClass('click-item-active');
          $('.tableStatus table tr').eq(number+1).addClass('click-item-active');
        } else {
          $('.tableStatus table tr').eq(number+1).stop(true,true).slideUp(duration);
          $('.tableStatus table tr').removeClass('click-item-active');
        }
    })
  /*select*/
    var dd = new DropDown( $('#dd') );
    var ddCost = new DropDown( $('#ddCost') );
    var ddRrating = new DropDown( $('#dd-rating') );
    var ddDays = new DropDown( $('#dd-days') );
    var ddCategory = new DropDown( $('#dd-category') );
    var ddPbi = new DropDown( $('#dd-pbi') );

    $(document).click(function() {
      $('.wrapper-dropdown').removeClass('active');
    });
  /*hidden phones*/
    $('.buttonPhonesHidden').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('buttonHidden');
      $(this).siblings($('.phonesHidden')).toggleClass('activeHiddenPhones');
    })

  /* fix menu */

});
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
          $(this).toggleClass('active');
          return false;
      });

      obj.opts.on('click',function(){
          var opt = $(this);
          obj.val = opt.text();
          obj.index = opt.index();
          obj.placeholder.text(obj.val);
      });
  },
  getValue : function() {
      return this.val;
  },
  getIndex : function() {
      return this.index;
  }
}
