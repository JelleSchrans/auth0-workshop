using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Auth0Controller : ControllerBase
    {
        [HttpGet("/authentication")]
        [Authorize]
        public ActionResult<string> GetAuthentication()
        {
            const string authenticated = "You have been authenticated!";
            return Ok(JsonSerializer.Serialize(authenticated));
        }

        [HttpGet("/authorization")]
        [Authorize("read:authorized")]
        public ActionResult<string> GetAuthorization()
        {
            const string authorized = "You have been authorized!";
            return Ok(JsonSerializer.Serialize(authorized));
        }
    }
}
