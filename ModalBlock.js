import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
// ---
const ModalBlock = ({
	// ---
	children,
	isOpenModal,
	onCloseModal,
}) => {
	const customStyles = {
		content: {
			width: '100%',
			height: '100%',
			border: 'none',
			background: 'transparent',
			padding: 0,
			borderRadius: 0,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
	}

	// ---
	return (
		// ---
		<Modal
			isOpen={isOpenModal}
			onRequestClose={onCloseModal}
			style={customStyles}
		>
			{children}
		</Modal>
	)
}

// ---
ModalBlock.propTypes = {
	// ---
	children: PropTypes.node,
	isOpenModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
}
// ---
export default ModalBlock
// ---
