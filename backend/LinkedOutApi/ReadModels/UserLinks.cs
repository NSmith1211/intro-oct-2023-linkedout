namespace LinkedOutApi.ReadModels;

public class UserLinks
{
    public Guid Id { get; set; }
    public int Version { get; set; }
    public List<UserLinkCreate> Links { get; set; } = new();

    public void Apply(UserLinkCreate @event)
    {
        Version++;
        Links.Add(@event);
    }
}