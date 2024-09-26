import { toast } from "react-toastify";

function Toast(props) {
  const { type, message } = props;
  if (type === "error") {
    toast.error(message);
  } else if (type === "success") {
    toast.success(message);
  } else if (type === "info") {
    toast.info(message);
  } else if (type === "warn") {
    toast.warn(message);
  }
  return null;
}

export default Toast;
