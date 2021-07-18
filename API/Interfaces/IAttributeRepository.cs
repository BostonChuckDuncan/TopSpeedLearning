using System.Threading.Tasks;

namespace API.Data
{
    public interface IAttributeRepository
    {
        Task<bool> AddAttribute(string AttributeType, int IndividualId);
        Task<bool> DeleteAttribute(int AttributeId);
        Task<bool> DeleteIndividualsAttribute(int IndividualId);
    }
}