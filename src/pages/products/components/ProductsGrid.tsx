import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise";
import { useRef } from "react";
import "./style.css";
import { Product } from "@acc/api";
import useProductGridOptions from "./useProductGridOptions";

interface ProductsGridParams {
  products: Product[];
}

const ProductsGrid = (props: ProductsGridParams) => {
  const gridRef = useRef<AgGridReact>(null);

  const { productGridColumns, defaultColDef, rowClassRules } =
    useProductGridOptions();

  const onDeleteRowsButtonSelected = () => {
    const selectedData = gridRef.current?.api.getSelectedRows();
    gridRef.current!.api.applyTransaction({
      remove: selectedData,
    });
  };

  const onExportEvent = () => {
    gridRef.current!.api.exportDataAsExcel();
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "end",
          marginBottom: "10px",
        }}
      >
        <button className="deleteRowBtn" onClick={onDeleteRowsButtonSelected}>
          Delete Selected Rows
        </button>
        <button className="exportContentBtn" onClick={onExportEvent}>
          Export Content
        </button>
      </div>
      <div
        className={"ag-theme-quartz"}
        style={{
          height: 600,
        }}
      >
        <AgGridReact
          ref={gridRef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 30]}
          rowData={props.products}
          columnDefs={productGridColumns}
          defaultColDef={defaultColDef}
          rowClassRules={rowClassRules}
          selection={{ mode: "multiRow", headerCheckbox: false }}
          sideBar={"columns"}
          rowGroupPanelShow={"always"}
        />
      </div>
    </>
  );
};

export default ProductsGrid;
