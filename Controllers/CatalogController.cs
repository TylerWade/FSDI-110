using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PROJECT.Models;

namespace PROJECT.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext Context;

        public CatalogController(DataContext context)
        {
            Context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult GetCatalog()
        {
            System.Console.WriteLine("Requested GetCatalog");

            List<Car> list = Context.Cars.Where(c => c.Make != null && c.Make != "" && c.Passengers != 0).ToList();
            //  where is used as a filter
            // where (c => c.year > 2015)

            // remove all items on the db
            //List<Car> allCars = Context.Cars.ToList();
            //Context.Cars.RemoveRange();
            //Context.SaveChanges();

            return Json(list);


        }

        [HttpPost]
        public IActionResult CreateCar([FromBody] Car newCar)
        {
            System.Console.WriteLine("Getting to CreateCar", newCar);

            Context.Cars.Add(newCar);
            Context.SaveChanges(); //<- the object will be sent to DB

            System.Console.WriteLine(); //empty line
            System.Console.WriteLine("****SAVED");
            System.Console.WriteLine();//empty line
            return Json(newCar);
        }
    }
}