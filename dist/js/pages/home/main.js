!function(){var n,e,d,i;n=function(n){var e=(window.jQuery,window.underscore,window.Backbone),d=e.Model.extend({name:null});return n=d}(),e=function(n){var e=(window.jQuery,window.underscore,window.Backbone),d=e.Collection.extend({initialize:function(n,e){this.bind("add",e.view.addOne)}});return n=d}(),d=function(d){var i=window.jQuery,o=(window.underscore,window.Backbone),t=n,r=e,u=o.View.extend({el:i("body"),initialize:function(){this.products=new r(null,{view:this})},events:{"click #addProduct":"addProduct"},addProduct:function(){var n=prompt("\u8f93\u5165\u4ea7\u54c1\u7684\u540d\u79f0"),e=new t({name:n});this.products.add(e)},addOne:function(n){i("#productList").append("<li>"+n.get("name")+"</li>")}});return d=u}(),i=function(){{var n=d;new n}}()}();