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
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalArchive from "@/components/partials/modal/ModalArchive";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import SearchBarWithFilterStatus from "@/components/partials/SearchBarWithFilterStatus";
import Status from "@/components/partials/Status";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import { FaArchive, FaEdit, FaTrash, FaTrashRestoreAlt } from "react-icons/fa";

const RecipeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [isFilter, setIsFilter] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });
  const [statusFilter, setStatusFilter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.recipe_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.recipe_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.recipe_aid);
  };

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: result,
  // } = useQueryData(
  //   `/v2/recipe`, // endpoint
  //   "get", // method
  //   "recipe"
  // );

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["recipe", onSearch, isFilter, statusFilter],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        "/v2/recipe/search", // search or filter endpoint
        `/v2/recipe/page/${pageParam}`, // page api/endpoint
        isFilter || store.isSearch, // search boolean
        {
          isFilter,
          statusFilter,
          searchValue: search?.current.value,
          id: "",
        } // payload
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div>
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
          setPage={setPage}
        />
      </div>
      <div className="p-4 bg-secondary mt-10 rounded-md border border-line relative">
        {/* {!isLoading || (isFetching && <SpinnerTable />)}{" "} */}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[50%]">Title</th>
                <th className="">Category</th>
                <th className="">Level</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? (
                      <TableLoader count={4} cols={4} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}

              {result?.pages.map((page, pageKey) => (
                <React.Fragment key={pageKey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td className="text-center">{counter++}</td>
                        <td>
                          {item.recipe_is_active ? (
                            <Status text={"Active"} />
                          ) : (
                            <Status text={"Inactive"} />
                          )}
                        </td>
                        <td>{item.recipe_title}</td>
                        <td>{item.category_title}</td>
                        <td>{item.level_title}</td>

                        <td
                          colSpan="100%"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-2 mr-4">
                            {item.recipe_is_active == 1 ? (
                              <>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Edit"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Archive"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Restore"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestoreAlt />
                                </button>
                                <button
                                  type="button"
                                  className="tool-tip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="pb-10 flex items-center justify-center">
            <LoadMore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete mysqlApiDelete={`/v2/recipe/${id}`} queryKey="recipe" />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/recipe/active/${id}`}
          queryKey={"recipe"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/recipe/active/${id}`}
          queryKey={"recipe"}
        />
      )}
    </>
  );
};

export default RecipeTable;
