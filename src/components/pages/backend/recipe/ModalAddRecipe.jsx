import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, Minus, Plus, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { InputPhotoUpload } from "@/components/helpers/FormInputs,";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";

const ModalAddRecipe = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => dispatch(setIsAdd(false));
  return (
    <ModalWrapper>
      <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 max-w-[1300px] w-full rounded-md border border-line">
        <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
          <span className="text-body">Add Recipe</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-4 py-4">
          <form action="">
            <div className="grid grid-cols-[1fr,_1.5fr,_1.5fr] gap-5">
              <div className="info">
                <h3 className="mb-0">Informration</h3>
                <div className="input-wrap relative  group input-photo-wrap h-[150px] mb-8">
                  <label htmlFor="">Photo</label>
                  {true ? (
                    <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
                      <ImagePlusIcon
                        size={50}
                        strokeWidth={1}
                        className="opacity-20 group-hover:opacity-50 transition-opacity"
                      />
                      <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                        Upload Photo
                      </small>
                    </div>
                  ) : (
                    <img
                      // src={
                      //   itemEdit === null
                      //     ? URL.createObjectURL(photo) // preview
                      //     : imgPath + "/" + itemEdit?.menu_image // check db
                      // }
                      alt="employee photo"
                      className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                    />
                  )}

                  {/* <InputPhotoUpload
                    name="photo"
                    type="file"
                    id="photo"
                    accept="image/*"
                    title="Upload photo"
                    onChange={(e) => handleChangePhoto(e)}
                    onDrop={(e) => handleChangePhoto(e)}
                    className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full`}
                  /> */}
                </div>
                <div className="input-wrap">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>
                <div className="input-wrap">
                  <label htmlFor="">Category</label>
                  <select name="" id="">
                    <option value="" hidden>
                      Select Category
                    </option>
                    <option value="Chicken">Chicken</option>
                    <option value="Beef">Beef</option>
                    <option value="Pasta">Pasta</option>
                  </select>
                </div>
                <div className="input-wrap">
                  <label htmlFor="">Level</label>
                  <select name="" id="">
                    <option value="" hidden>
                      Select Level
                    </option>
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="difficult">Difficult</option>
                  </select>
                </div>
                <div className="input-wrap">
                  <label htmlFor="">Serving</label>
                  <input type="text" />
                </div>
                <div className="input-wrap">
                  <label htmlFor="">Prep Time</label>
                  <input type="text" />
                </div>
              </div>

              <div className="ingredients ">
                <div className="input-wrap">
                  <div className="flex justify-between items-center">
                    <h3 className="mb-0">Ingredients</h3>

                    <button className="bg-yellow-600 p-1 text-sm rounded-md px-2">
                      Add
                    </button>
                  </div>

                  <div className="overflow-y-auto custom-scroll max-h-[500px] h-full pr-2">
                    {Array.from(Array(2).keys()).map((i) => (
                      <div
                        className="grid grid-cols-[1fr,_.3fr,_.8fr_.2fr] gap-3 mt-3 "
                        key={i}
                      >
                        <div>
                          <label htmlFor="">Ingredients</label>
                          <input type="text" />
                        </div>

                        <div>
                          <label htmlFor="">Amount</label>
                          <input type="text" />
                        </div>

                        <div>
                          <label htmlFor="">Unit</label>
                          <select name="" id="">
                            <option value="">tbsp</option>
                            <option value="">tsp</option>
                            <option value="">cup</option>
                            <option value="">oz</option>
                          </select>
                        </div>

                        <button className="size-[33px] bg-orange text-white rounded-md center-all self-end">
                          <Minus />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="instruction">
                <h3 className="mb-0">Description</h3>
                <textarea className="overflow-y-auto custom-scroll p-2 max-h-[120px] h-full w-full rounded-md outline-none border border-line bg-primary text-body resize-none mb-5" />
                <h3 className="mb-0">Instructions</h3>
                <textarea className="overflow-y-auto custom-scroll p-2 max-h-[300px] h-full w-full rounded-md outline-none border border-line bg-primary text-body resize-none" />
              </div>
            </div>
          </form>
          <div className="flex justify-end gap-3 mt-5">
            <button className="btn btn-alert">
              <SpinnerButton /> Add
            </button>
            <button className="btn btn-cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddRecipe;
