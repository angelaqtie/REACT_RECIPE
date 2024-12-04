import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import Footer from "../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import RecipeTable from "./RecipeTable";
import ModalAddRecipe from "./ModalAddRecipe";
import { imgPath } from "@/components/helpers/functions-general";
import ToastSuccess from "../partials/ToastSuccess";
import ModalValidation from "../partials/modals/ModalValidation";

const Recipe = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          
          <SideNavigation menu="recipe" />
          <main>
            <Header title="Recipe" subtitle="Manage Kiosk Recipe" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <RecipeTable setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalErroR />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddRecipe itemEdit={itemEdit} />}
    </>
  );
};

export default Recipe;
