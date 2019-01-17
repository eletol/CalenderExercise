using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AutoMapper;
using XYZ.BL.BussinessMangers.Interfaces;
using XYZ.BL.Helper;
using XYZ.DAL.Models;
using XYZ.DAL.Repository.Interfaces;
using XYZ.DAL.UnitOfWork;

namespace XYZ.BL.BussinessMangers.Classes
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    /// <typeparam name="TRepository"></typeparam>
    /// <typeparam name="TEntityVM"></typeparam>
    public class BaseBussinessManger<TEntity, TRepository, TEntityVM> : IBaseBussinessManger<TEntity, TEntityVM> where TEntity : class, IBaseModel
        where TRepository : IBaseRepository<TEntity>
          where TEntityVM : class
    {
        public BaseBussinessManger(IUnitOfWork _uow)
        {
           
            if (_uow == null)
            {
                throw new ArgumentNullException("no repository provided");
            }
          
            UnitOfWork = _uow;
            Repository = UnitOfWork.Repository<TEntity, TRepository>();

       
        }

        protected IBaseRepository<TEntity> Repository { get; set; }
        protected IUnitOfWork UnitOfWork { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual TEntity GetById(object id)
        {
            return Repository.GetById(id);
        }
        public virtual BussinessCustomResponse<TEntity> DeleteSoftly(object id)
        {
            var entity = Repository.GetById(id);
            entity.IsDeleted = true;
            var deletedItem = Repository.Update(entity);
            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(deletedItem);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual  TEntityVM GetVMById(object id)
        {
            TEntity entity = Repository.GetById(id);
            if (entity.IsDeleted==true)
            {
                entity = null;
            }
            TEntityVM itemVM = Mapper.Map<TEntityVM>(entity);

            return itemVM;
        }
        public virtual void DeleteByFilter(Expression<Func<TEntity, bool>> filter)
        {
             Repository.DeleteByFilter(filter);
            UnitOfWork.Save();

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntityVM> Save(TEntityVM itemVM)
        {
    
            TEntity item = Mapper.Map<TEntity>(itemVM);
            item.CreationDate = DateTime.Now;
            item.LastUpdate= DateTime.Now;
            item.IsDeleted = false;
            TEntity addedItem = Repository.Save(item);
            UnitOfWork.Save();
            TEntityVM itemVMNew = Mapper.Map<TEntityVM>(addedItem);
            return BussinessCustomResponse(itemVMNew);

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntity> Save(TEntity item)
        {
            item.CreationDate = DateTime.Now;
            item.LastUpdate = DateTime.Now;
            item.IsDeleted = false;
            var addedItem = Repository.Save(item);

            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(addedItem);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items"></param>
        /// <returns></returns>
        public virtual List<TEntity> SaveList(List<TEntity> items)
        {
            var addedItem = Repository.SaveList(items);

            UnitOfWork.Save();
            return addedItem;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="entityToUpdate"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntityVM> Update(TEntityVM entityToUpdateVM)
        {
            TEntity entityToUpdate = Mapper.Map<TEntity>(entityToUpdateVM);
            entityToUpdate.LastUpdate = DateTime.Now;
            entityToUpdate.IsDeleted = entityToUpdate.IsDeleted ?? false;
            var editedItem = Repository.Update(entityToUpdate);

            UnitOfWork.Save();
            return BussinessCustomResponse(entityToUpdateVM);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="entityToUpdate"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntity> Update(TEntity entityToUpdate)
        {
            var editedItem = Repository.Update(entityToUpdate);
            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(editedItem);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntity> Delete(object id)
        {
            var deletedItem = Repository.Delete(id);
            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(deletedItem);
        }

        public virtual IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            return Repository.Get(filter, orderBy, includeProperties);
        }

        public virtual IQueryable<TEntityVM> GetVM(Expression<Func<TEntity, bool>> filter = null,
           Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
           params Expression<Func<TEntity, object>>[] includeProperties)
        {
            var res= Repository.Get(filter, orderBy, includeProperties).ToList();
            List<TEntityVM> resVM = Mapper.Map<List<TEntityVM>>(res);
            return resVM.AsQueryable();

        }
        public int Count(Expression<Func<TEntity, bool>> filter)
        {
            return Repository.Count(filter);

        }
        public virtual void DeleteByFilterInMemory(Expression<Func<TEntity, bool>> filter)
        {
            Repository.DeleteByFilter(filter);
            UnitOfWork.Save();

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntityVM> SaveInMemory(TEntityVM itemVM)
        {

            TEntity item = Mapper.Map<TEntity>(itemVM);
            item.CreationDate = DateTime.Now;
            item.LastUpdate = DateTime.Now;
            item.IsDeleted = false;
            TEntity addedItem = Repository.Save(item);
            UnitOfWork.Save();
            TEntityVM itemVMNew = Mapper.Map<TEntityVM>(addedItem);
            return BussinessCustomResponse(itemVMNew);

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntity> SaveInMemory(TEntity item)
        {
            item.CreationDate = DateTime.Now;
            item.LastUpdate = DateTime.Now;
            item.IsDeleted = false;
            var addedItem = Repository.Save(item);

            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(addedItem);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items"></param>
        /// <returns></returns>
        public virtual List<TEntity> SaveListInMemory(List<TEntity> items)
        {
            var addedItem = Repository.SaveList(items);

            UnitOfWork.Save();
            return addedItem;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="entityToUpdate"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntityVM> UpdateInMemory(TEntityVM entityToUpdateVM)
        {
            TEntity entityToUpdate = Mapper.Map<TEntity>(entityToUpdateVM);
            entityToUpdate.LastUpdate = DateTime.Now;
            entityToUpdate.IsDeleted = entityToUpdate.IsDeleted ?? false;
            var editedItem = Repository.Update(entityToUpdate);
            TEntityVM editedItemVM = Mapper.Map<TEntityVM>(editedItem);

            UnitOfWork.Save();
            return BussinessCustomResponse(editedItemVM);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="entityToUpdate"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntity> UpdateInMemory(TEntity entityToUpdate)
        {
            var editedItem = Repository.Update(entityToUpdate);
            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(editedItem);
        }
        public virtual BussinessCustomResponse<TEntity> DeleteSoftlyInMemory(object id)
        {
            var entity = Repository.GetById(id);
            entity.IsDeleted = true;
            var deletedItem = Repository.Update(entity);
            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(deletedItem);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual BussinessCustomResponse<TEntity> DeleteInMemory(object id)
        {
            var deletedItem = Repository.Delete(id);
            UnitOfWork.Save();
            return BussinessCustomResponse<TEntity>(deletedItem);
        }
        private BussinessCustomResponse<T> BussinessCustomResponse<T>(T res)  
        {
            return new BussinessCustomResponse<T>
            {
                ErrorMsg = "",
                Success = true,
                response = res
            };

        }
    }
}