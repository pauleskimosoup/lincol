gapi.analytics.ready(function(){gapi.analytics.auth.authorize({serverAuth:{access_token:$("[data-auth-token]").data("auth-token")}});var e=new gapi.analytics.googleCharts.DataChart({query:{metrics:"ga:sessions, ga:bounces",dimensions:"ga:date","start-date":"30daysAgo","end-date":"yesterday","max-results":30},chart:{container:"monthly-chart-container",type:"LINE",options:{width:"100%"}}});e.set({query:{ids:""}}).execute();var t=new gapi.analytics.googleCharts.DataChart({query:{metrics:"ga:sessions, ga:bounces",dimensions:"ga:yearMonth","start-date":"365daysAgo","end-date":"today","max-results":365},chart:{container:"yearly-chart-container",type:"LINE",options:{width:"100%"}}});t.set({query:{ids:""}}).execute();var n=new gapi.analytics.googleCharts.DataChart({reportType:"ga",query:{dimensions:"ga:browser",metrics:"ga:sessions","start-date":"30daysAgo","end-date":"yesterday"},chart:{type:"PIE",container:"monthly-browser-chart-container"}});n.set({query:{ids:""}}).execute();var i=new gapi.analytics.googleCharts.DataChart({reportType:"ga",query:{dimensions:"ga:deviceCategory",metrics:"ga:sessions","start-date":"30daysAgo","end-date":"yesterday"},chart:{type:"PIE",container:"monthly-device-category-chart-container"}});i.set({query:{ids:""}}).execute();var r=new gapi.analytics.googleCharts.DataChart({reportType:"ga",query:{dimensions:"ga:source",metrics:"ga:sessions","start-date":"30daysAgo","end-date":"yesterday"},chart:{type:"PIE",container:"monthly-traffic-sources-chart-container"}});r.set({query:{ids:""}}).execute();var o=new gapi.analytics.googleCharts.DataChart({reportType:"ga",query:{dimensions:"ga:usertype",metrics:"ga:sessions","start-date":"30daysAgo","end-date":"yesterday"},chart:{type:"PIE",container:"monthly-user-type-chart-container"}});o.set({query:{ids:""}}).execute();var a=new gapi.analytics.ext.ActiveUsers({container:"active-users-container",pollingInterval:5});a.once("success",function(){var e;this.container.firstChild;this.on("change",function(t){var n=this.container.firstChild,i=t.delta>0?"is-increasing":"is-decreasing";n.className+=" "+i,clearTimeout(e),e=setTimeout(function(){n.className=n.className.replace(/ is-(increasing|decreasing)/g,"")},3e3)})}),a.set({ids:""}).execute(),setTimeout(function(){Foundation.libs.equalizer.reflow()},2500)});