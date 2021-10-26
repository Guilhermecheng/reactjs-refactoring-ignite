import { Component, createRef, RefObject } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodProps {
  id: number;
  available: boolean;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  formRef: RefObject<HTMLFormElement>;
  handleUpdateFood: (arg0: FoodProps) => void;
  editingFood: boolean;
}

class ModalEditFood extends Component<ModalEditFoodProps> {
  // private formRef = createRef<HTMLFormElement>()

  constructor(props: ModalEditFoodProps) {
    super(props);

    this.formRef = createRef<HTMLFormElement>()
  }

  handleSubmit = async (data: FoodProps) => {
    const { setIsOpen, handleUpdateFood } = this.props;

    handleUpdateFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen, editingFood } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={this.formRef} onSubmit={this.handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
};

export default ModalEditFood;