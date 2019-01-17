using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using XYZ.BL.Helper;

namespace XYZ.BL.BussinessMangers.Interfaces
{
    public interface IBaseBussinessManger<TEntity, TEntityVM> where TEntity : class
        where TEntityVM : class
    {
        BussinessCustomResponse<TEntityVM> Update(TEntityVM entityToUpdateVM);
        BussinessCustomResponse<TEntityVM> Save(TEntityVM itemVM);
        BussinessCustomResponse<TEntity> Save(TEntity item);
        BussinessCustomResponse<TEntity> Update(TEntity entityToUpdate);
        BussinessCustomResponse<TEntity> Delete(object id);
         int Count(Expression<Func<TEntity, bool>> filter);
        IQueryable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties);

        IQueryable<TEntityVM> GetVM(Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties);
        List<TEntity> SaveList(List<TEntity> items);
        void DeleteByFilter(Expression<Func<TEntity, bool>> filter);

        BussinessCustomResponse<TEntity> DeleteSoftly(object id);
        BussinessCustomResponse<TEntity> DeleteSoftlyInMemory(object id);

        BussinessCustomResponse<TEntityVM> UpdateInMemory(TEntityVM entityToUpdateVM);
        TEntity GetById(object id);
        BussinessCustomResponse<TEntityVM> SaveInMemory(TEntityVM itemVM);
        TEntityVM GetVMById(object id);
        BussinessCustomResponse<TEntity> SaveInMemory(TEntity item);
        BussinessCustomResponse<TEntity> UpdateInMemory(TEntity entityToUpdate);
        BussinessCustomResponse<TEntity> DeleteInMemory(object id);

    }
}