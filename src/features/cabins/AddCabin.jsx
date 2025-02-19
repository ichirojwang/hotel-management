import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

/* 
const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {isOpenModal ? "Hide Form" : "Add new cabin"}
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((show) => !show)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal((show) => !show)} />
        </Modal>
      )}
    </>
  );
};
 */
export default AddCabin;
