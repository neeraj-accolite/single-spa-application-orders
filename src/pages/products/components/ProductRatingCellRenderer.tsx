import { CustomCellRendererProps } from "ag-grid-react";

function ProductRatingCellRenderer(props: CustomCellRendererProps) {
  if (!props.data) {
    return null;
  }

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <span
              key={star}
              style={{
                color: props.value >= star ? "gold" : "gray",
                fontSize: `15px`,
              }}
            >
              {" "}
              ★{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProductRatingCellRenderer;
