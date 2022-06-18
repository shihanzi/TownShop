using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public class Problem : IProductRepository
    {
        Task<IReadOnlyList<Product>> IProductRepository.GetProductAsync()
        {
            throw new NotImplementedException();
        }

        Task<IReadOnlyList<ProductBrand>> IProductRepository.GetProductBrandsAsync()
        {
            throw new NotImplementedException();
        }

        Task<Product> IProductRepository.GetProductByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<IReadOnlyList<ProductType>> IProductRepository.GetProductTypesAsync()
        {
            throw new NotImplementedException();
        }
    }
}