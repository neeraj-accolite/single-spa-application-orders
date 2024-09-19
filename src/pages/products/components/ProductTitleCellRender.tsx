import { Product } from "@acc/api";
import { CustomCellRendererProps } from "ag-grid-react";

function ProductTitleCellRender(props: CustomCellRendererProps<Product>) {
  if (!props.data) {
    return null;
  }

  return (
    <div
      key={props.value}
      style={{
        flex: 1,
        alignItems: "center",
        display: "flex",
      }}
    >
      <img
        src={props.data?.thumbnail}
        style={{ width: 30, height: 30, marginRight: "5px" }}
      />
      {props.data?.title}
    </div>
  );
}

export default ProductTitleCellRender;
