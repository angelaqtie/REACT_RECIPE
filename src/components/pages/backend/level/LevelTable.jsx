import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import Pills from "../partials/Pills";
import IconServerError from "../partials/IconServerError";
import LoadMore from "../partials/LoadMore";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsArchive,
  setIsConfirm,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import Status from "@/components/partials/Status";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalRestore from "@/components/partials/modal/ModalRestore";

const LevelTable = ({ setIsLevelEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setIsLevelEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.level_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.level_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.level_aid);
  };

  const {
    isFetching,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/level`, //endpoint
    "get", //method
    "level" //key
  );

  return (
    <>
      <div className="p-4 bg-secondary mt-10 rounded-md border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={4} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[50%]">Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr> */}

              {/* <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr> */}
              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}</td>
                    <td>
                      {item.level_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="InActive" />
                      )}
                    </td>
                    <td>{item.level_title}</td>
                    <td>
                      <ul className="table-action">
                        {item.level_is_active === 1 ? (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FilePenLine />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <Archive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tool-tip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/level/${id}`}
          queryKey={"level"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/level/active/${id}`}
          queryKey={"level"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/level/active/${id}`}
          queryKey={"level"}
        />
      )}

      {store.isView && <ModalView movieInfo={movieInfo} />}
    </>
  );
};

export default LevelTable;
