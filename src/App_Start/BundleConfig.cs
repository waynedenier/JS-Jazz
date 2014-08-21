using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace JS_Jazz
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                "~/Scripts/angular.js",
                "~/Scripts/jquery-1.11.1.min.js",
                "~/Scripts/app.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //     "~/Content/bootstrap.css",
            //     "~/Content/Site.css"));
        }
    }
}
