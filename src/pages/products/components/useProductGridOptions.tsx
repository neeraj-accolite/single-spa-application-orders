import { ColDef, RowClassRules } from "ag-grid-community";
import { Product } from "@acc/api";
import { useMemo } from "react";
import ProductCellAction from "./ProductCellAction";
import ProductTitleCellRender from "./ProductTitleCellRender";
import ProductRatingCellRenderer from "./ProductRatingCellRenderer";
import "ag-grid-enterprise";

export default function useProductGridOptions() {
  const productGridColumns = useMemo<ColDef<Product>[]>(
    () => [
      {
        headerName: "Title",
        cellRenderer: ProductTitleCellRender,
        resizable: true,
      },
      { field: "description", flex: 3, filter: true, floatingFilter: true },
      {
        headerName: "Category & Brands",
        children: [
          { columnGroupShow: "open", field: "category", rowGroup: true },
          { columnGroupShow: "open", field: "brand", rowGroup: false },
        ],
      },
      {
        field: "price",
        valueFormatter: (row) => (row.data ? `$ ${row.data?.price}` : ""),
        cellEditor: "",
      },
      {
        field: "rating",
        cellRenderer: ProductRatingCellRenderer,
        filter: true,
      },
      {
        headerName: "Actions",
        cellRenderer: ProductCellAction,
        filter: false,
        sortable: false,
      },
    ],
    []
  );

  const defaultColDef: ColDef = {
    flex: 1,
  };

  const rowClassRules = useMemo<RowClassRules<Product>>(() => {
    return {
      "row-green": (params) => {
        return Number(params?.data?.id) % 2 === 0;
      },
      "row-blue": (params) => {
        return Number(params?.data?.id) % 2 === 1;
      },
    };
  }, []);

  return {
    productGridColumns,
    defaultColDef,
    rowClassRules,
  };
}
