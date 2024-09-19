import { CustomCellRendererProps } from "ag-grid-react";

function ProductCellAction(props: CustomCellRendererProps) {
  if (!props.data) {
    return null;
  }
  const onDeleteClicked = () => {
    props.api.applyTransaction({
      remove: [props.data],
    });
  };

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={onDeleteClicked}>Delete</button>
    </div>
  );
}

export default ProductCellAction;
