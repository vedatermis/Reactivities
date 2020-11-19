using Domain;

namespace Infrastructure
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }
}