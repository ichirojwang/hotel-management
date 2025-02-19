/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout.js";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
      variation="primary"
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
