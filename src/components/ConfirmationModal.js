import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, closeModal, onRemove, expenseDescription }) => (
	<Modal
		isOpen={isOpen}
		contentLabel='Are you sure you want to delete the expense?'
		onRequestClose={closeModal}
		closeTimeOutMS={200}
		className='modal'
	>
			<h3 className="modal__message">Are you sure you want to delete the expense?</h3>
			<h3 className="modal__item">{`"${expenseDescription}"`}</h3>
			<button className="button button--delete button-1" onClick={onRemove}>Delete</button>
			<button className="button button-2" onClick={closeModal}>Cancel</button>
	</Modal>
);

export default ConfirmationModal;	
