using System.Threading.Tasks;

namespace API.Data
{
    public class AttributeRepository : IAttributeRepository
    {
        public Task<bool> AddAttribute(string AttributeType, int IndividualId)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> DeleteAttribute(int AttributeId)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> DeleteIndividualsAttribute(int IndividualId)
        {
            throw new System.NotImplementedException();
        }
    }
}