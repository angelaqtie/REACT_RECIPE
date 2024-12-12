import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import { Plus } from "lucide-react";
import CategoryTable from "./LevelTable";
import Footer from "../partials/Footer";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import ModalCategory from "./ModalAddLevel";
import LevelTable from "./LevelTable";
import ModalAddLevel from "./ModalAddLevel";

const Level = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isLevelEdit, setIsLevelEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsLevelEdit(null);
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="level" />
          <main>
            <Header title="Level" subtitle="Manage Kiosk Level" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <LevelTable
                isLevelEdit={isLevelEdit}
                setIsLevelEdit={setIsLevelEdit}
              />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && (
        <ModalAddLevel
          isLevelEdit={isLevelEdit}
          setIsLevelEdit={setIsLevelEdit}
        />
      )}
    </>
  );
};

export default Level;
