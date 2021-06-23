using LifeStyleMenegmentUsers.Data;
using LifeStyleMenegmentUsers.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LifeStyleMenegmentUsers.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly ILogger<OidcConfigurationController> _logger;

        public HomeController(ApplicationDbContext dbContext , IClientRequestParametersProvider clientRequestParametersProvider, ILogger<OidcConfigurationController> logger)
        {
            _dbContext = dbContext;
            ClientRequestParametersProvider = clientRequestParametersProvider;
            _logger = logger;
        }
        public IClientRequestParametersProvider ClientRequestParametersProvider { get; }

        // POST: HomeController/Create
        [HttpPost]
        [Route("/UpdateDetails")]
        public void UpdateDetails([FromBody]ApplicationUser form)
        {
            string un = form.UserName;
            ApplicationUser thisUser = _dbContext.Users.FirstOrDefault(x => x.UserName == un);
            thisUser.FirstName = form.FirstName;
            thisUser.LastName = form.LastName;
            thisUser.Address = form.Address;
            thisUser.PhoneNumber = form.PhoneNumber;
            thisUser.YearBirthDate = form.YearBirthDate;
            thisUser.Status = form.Status;
            thisUser.Height = form.Height;
            thisUser.Weight = form.Weight;

           
            _dbContext.SaveChanges();
        }



        // POST: HomeController/Edit/5
        [HttpGet]
        [Route("/GetDetailsUser/{id}")]
        public IActionResult GetDetailsUser([FromRoute] string id)
       {
            ApplicationUser myUser = _dbContext.Users.Find(id);
            return Ok(myUser);

        }

        // GET: HomeController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: HomeController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
