!function(){var t;(t=jQuery).fn.rtsb_quick_view=function(){var e=new RtsbModal({footer:!1,header:!0,title:!1,wrapClass:"quick-view-modal",maxWidth:950});t(document).off("click",".rtsb-quick-view-btn").on("click",".rtsb-quick-view-btn",(function(o){o.preventDefault(),o.stopPropagation();var a=t(this),i=a.data("product_id");a.data("title"),i?t.ajax({url:rtsbQvParams.ajaxurl,data:{action:"rtsb_load_product_quick_view",product_id:i,lang:rtsbQvParams.lang},dataType:"json",type:"POST",beforeSend:function(){e.addModal().addLoading()},success:function(o){e.body.addClass("woocommerce single-product"),e.addTitle(""),e.content(o.data.html);var a=e.body.find(".variations_form");a.each((function(){t(this).wc_variation_form()})),a.trigger("check_variations"),a.trigger("reset_image"),void 0!==t.fn.wc_product_gallery&&e.body.find(".woocommerce-product-gallery").each((function(){t(this).wc_product_gallery()})),e.removeLoading(),t(document).trigger("rtsbQv.success")},fail:function(){t(document).trigger("rtsbQv.error")},always:function(){alert("complete"),t(document).trigger("rtsbQv.loaded")}}):console.log("No product selected")}))},t(document).on("yith_infs_adding_elem yith-wcan-ajax-filtered",(function(){t.fn.rtsb_quick_view()})),t((function(){t.fn.rtsb_quick_view()}))}();