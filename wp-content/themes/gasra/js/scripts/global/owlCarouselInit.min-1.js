!function(o){woodmartThemeModule.$document.on("wdInstagramAjaxSuccess wdLoadDropdownsSuccess wdproductsTabsLoaded wdSearchFullScreenContentLoaded wdShopPageInit wdRecentlyViewedproductLoaded",function(){woodmartThemeModule.owlCarouselInit()}),o.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default","frontend/element_ready/wd_product_categories.default","frontend/element_ready/wd_products_brands.default","frontend/element_ready/wd_blog.default","frontend/element_ready/wd_portfolio.default","frontend/element_ready/wd_images_gallery.default","frontend/element_ready/wd_product_categories.default","frontend/element_ready/wd_banner_carousel.default","frontend/element_ready/wd_infobox_carousel.default","frontend/element_ready/wd_instagram.default","frontend/element_ready/wd_testimonials.default"],function(e,a){woodmartThemeModule.wdElementorAddAction(a,function(){woodmartThemeModule.owlCarouselInit()})}),woodmartThemeModule.owlCarouselInit=function(){function e(e){var a,t=e.find(".owl-carousel");function d(){var e=t.find(".owl-item.active").find(".wd-slide").attr("id"),e=t.find('[id="'+e+'"]');t.find(".owl-item.pseudo-active").removeClass("pseudo-active"),e.each(function(){var e=o(this);e.parent().hasClass("active")||e.parent().addClass("pseudo-active")})}woodmartThemeModule.windowWidth<=1024&&e.hasClass("disable-owl-mobile")||t.hasClass("owl-loaded")||(a={rtl:woodmartThemeModule.$body.hasClass("rtl"),items:e.data("desktop")?e.data("desktop"):1,responsive:{1025:{items:e.data("desktop")?e.data("desktop"):1},769:{items:e.data("tablet_landscape")?e.data("tablet_landscape"):1},577:{items:e.data("tablet")?e.data("tablet"):1},0:{items:e.data("mobile")?e.data("mobile"):1}},autoplay:"yes"===e.data("autoplay"),autoplayHoverPause:"yes"===e.data("autoplay"),autoplayTimeout:e.data("speed")?e.data("speed"):5e3,dots:"yes"!==e.data("hide_pagination_control"),nav:"yes"!==e.data("hide_prev_next_buttons"),autoHeight:"yes"===e.data("autoheight"),slideBy:void 0!==e.data("scroll_per_page")?1:"page",navText:!1,navClass:["owl-prev wd-btn-arrow","owl-next wd-btn-arrow"],center:"yes"===e.data("center_mode"),loop:"yes"===e.data("wrap"),dragEndSpeed:e.data("dragendspeed")?e.data("dragendspeed"):200},e.data("sliding_speed")&&(a.smartSpeed=e.data("sliding_speed"),a.dragEndSpeed=e.data("sliding_speed")),e.data("animation")&&(a.animateOut=e.data("animation"),a.mouseDrag=!0),e.data("content_animation")&&(d(),a.onTranslated=function(){d()}),woodmartThemeModule.$window.on("vc_js",function(){t.trigger("refresh.owl.carousel")}),t.find("link").appendTo("head"),t.owlCarousel(a),"yes"===e.data("autoheight")&&t.imagesLoaded(function(){t.trigger("refresh.owl.carousel")}))}o("[data-owl-carousel]:not(.scroll-init):not(.wd-slider-wrapper)").each(function(){e(o(this))}),void 0!==o.fn.waypoint&&o("[data-owl-carousel].scroll-init:not(.wd-slider-wrapper)").waypoint(function(){e(o(o(this)[0].element))},{offset:"100%"})},o(document).ready(function(){woodmartThemeModule.owlCarouselInit()})}(jQuery);