function toggleForms(e,t,n){$("#optimadmin_images_for_"+t+" .highlight").removeClass("highlight").addClass("lowlight"),$("#optimadmin_images_for_"+t+" "+e).removeClass("lowlight").addClass("highlight"),$("#<%= f.object.class.name.underscore %>_remote_"+t+"_url").val(n)}function setImage(e,t){selectedImageUrl=$("#"+t+" .slick-center:first").data("main-image-url"),selectedThumbImageUrl=$("#"+t+" .slick-center:first").data("thumb-image-url"),$("#"+e).val(selectedImageUrl),$("#preview_"+t).length?$("#preview_"+t).attr("src",selectedThumbImageUrl):$('<br /><img id="preview_'+t+'" src="'+selectedThumbImageUrl+'" />').insertAfter("#container_"+t+" .first-label"),$("#container_"+t+" .toggle-class").click()}$(document).on("click",".set-image",function(){setImage($(this).data("image-field-id"),$(this).data("image-name"))}),$(document).on("click",".from-existing",function(){$(".slick-image-selector").slick("setPosition")}),$(document).on("click",".slick-image-selector .slick-slide",function(e){e.stopPropagation();var t=$(this).data("slick-index");$(".slick-slider").slick("slickCurrentSlide")!==t&&$(".slick-slider").slick("slickGoTo",t)});