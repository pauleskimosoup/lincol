function enableTabs(){$(".tabs").tabs({create:function(e,t){$(".tabs").removeClass("prevent-flash")},activate:function(){Foundation.libs.equalizer.reflow()}}),$(".field_with_errors").each(function(){var e=$(this).closest("fieldset").attr("id");$("a[href=#"+e+"]").css("color","red")})}function sortableComplete(){$(".odd, .even").removeClass("odd even"),$(".module-list-index:odd").addClass("odd"),$(".module-list-index:even").addClass("even"),$(".module-list-index:not(.module-list-index.header)").effect("highlight",{color:"#86cccc"},500)}$(document).on("change",".navigation-quick-select",function(){window.location=$(this).val()}),$(document).ready(function(){$(".datepicker").datepicker({dateFormat:"dd-mm-yy"}),$(".single-colorbox").colorbox(),$(".searchable-select").select2({placeholder:"Please select"}),$(".module-sortable").sortable({containment:".ui-sortable",items:".module-list-index",axis:"y",update:function(){$.ajax({type:"post",data:"model="+$(".ui-sortable").attr("data-module")+"&"+$(this).sortable("serialize"),dataType:"script",complete:sortableComplete,url:"/admin/reorder"})}}),$(".navigation-sortable").sortable({containment:"parent",items:".menu-item",axis:"y",update:function(){$.ajax({type:"post",data:$(this).closest(".navigation-sortable").sortable("serialize"),dataType:"script",complete:sortableComplete,url:$(this).closest(".navigation-sortable").data("sortable-path")})}}),$(".ui-sortable").disableSelection(),$(".slick-image-selector").slick({centerMode:!0,centerPadding:"60px",slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]})}),Modernizr.mq("only screen and (min-width: 1024px)")?($(function(){enableTabs(),$(".tabs").prepend('<a class="enable-tabs" href="#" style="display:none";>Enable tabs <span class="octicon octicon-chevron-up"></span></a>')}),$(document).on("click",".destroy-tabs",function(){$("."+$(this).attr("data-class")).tabs("destroy"),$(".tab-list a").each(function(){$($(this).attr("href")).prepend("<legend>"+$(this).text()+"</legend>")}),$(".tab-list, .destroy-tabs").hide(),$(".enable-tabs").removeAttr("style"),$("form").removeClass("form-has-tabs"),Foundation.libs.equalizer.reflow()}),$(document).on("click",".enable-tabs",function(){enableTabs(),$(".enable-tabs").hide(),$(".tab-list, .destroy-tabs").show(),$(".tabs legend").remove()})):$(function(){$(".tab-list").hide(),$(".tab-list a").each(function(){$($(this).attr("href")).prepend("<legend>"+$(this).text()+"</legend>")})});