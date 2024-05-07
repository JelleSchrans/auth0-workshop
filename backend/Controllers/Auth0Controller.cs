using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Auth0Controller : ControllerBase
    {
        [HttpGet("/authentication")]
        /*[Authorize]*/
        public ActionResult<string> GetAuthentication()
        {
            const string authenticated = "You have been authenticated!";
            return Ok(authenticated);
        }

        [HttpGet("/authorization")]
        /*[Authorize("read:authorized")]*/
        public ActionResult<string> GetAuthorization()
        {
            const string authorized = "You have been authorized!";
            return Ok(authorized);
        }
    }
}
