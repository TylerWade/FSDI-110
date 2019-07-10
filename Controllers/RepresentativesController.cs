using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PROJECT.Models;

namespace PROJECT.Controllers {

    public class RepresentativesController : Controller {

        private DataContext Context;

        public RepresentativesController (DataContext context) {

            Context = context;

        }

        public IActionResult Index () {
            return View ();
        }

        public IActionResult Create () {
            return View ();
        }

        public IActionResult GetList () {
            List<Representative> list = Context.Representative.ToList ();

            return Json (list);
        }

        [HttpPost]
        public IActionResult Save ([FromBody] Representative newRep) {
            System.Console.WriteLine ("empty");
            System.Console.WriteLine (newRep.Name, newRep.LastName, newRep.PhoneNumber);
            System.Console.WriteLine ("empty");

            Context.Representative.Add (newRep); // add to the table
            Context.SaveChanges (); // Save the changes (commit the obj to DB)

            return Json (newRep); // return the object to Front End with assigned ID

        }

    }
}