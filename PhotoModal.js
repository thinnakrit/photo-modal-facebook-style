import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withSizes from 'react-sizes'
// ---
import ModalBlock from './ModalBlock'
// ---
const PhotoModal = ({
	// ---
	isOpenModal,
	onCloseModal,
	screenHeight,
	screenWidth,
}) => {
	const [imageSize, setImageSize] = useState({})
	const onImageLoad = (event) => {
		console.log(
			'event.target.offsetWidth',
			event.target.offsetWidth
		)
		setImageSize({
			width: event.target.offsetWidth,
			height: event.target.offsetHeight,
		})
	}
	const photoBlockWidth =
		screenWidth >= imageSize.width + 400
			? imageSize.width
			: screenWidth - 500
	const screenPhotoWidth = photoBlockWidth + 400
	const photoBlockHeight = screenHeight - 100
	const contentBlockWidth = 400
	const contentBlockHeight = screenHeight - 100
	const isMobile = screenWidth <= 1100 ? true : false
	// ---
	const mockImage = {
		landscape:
			'https://i.ytimg.com/vi/LSXiA1Ua6ls/maxresdefault.jpg',
		vertical:
			'https://pbs.twimg.com/media/D_puiauU8AEQcCN.jpg',
		square: 'https://chill.co.th/upload/upload2495.jpg',
		long:
			'https://easysunday.com/blog/wp-content/uploads/2018/07/%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%84%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A.jpg',
	}
	return (
		// ---
		<ModalBlock
			isOpenModal={isOpenModal}
			onCloseModal={onCloseModal}
		>
			<PhotoModalWrapper
				isMobile={isMobile}
				maxWidth={screenPhotoWidth}
			>
				<PhotoSourceWrapper
					photoBlockWidth={photoBlockWidth}
					photoBlockHeight={photoBlockHeight}
					contentBlockHeight={contentBlockHeight}
					isMobile={isMobile}
				>
					<PhotoSource isMobile={isMobile}>
						<PhotoSourcePreview
							photoBlockWidth={photoBlockWidth}
							photoBlockHeight={photoBlockHeight}
							isMobile={isMobile}
							onLoad={onImageLoad}
							src={mockImage.landscape}
						/>
					</PhotoSource>
				</PhotoSourceWrapper>
				<PhotoContentWrapper
					contentBlockWidth={contentBlockWidth}
					contentBlockHeight={contentBlockHeight}
					isMobile={isMobile}
				>
					ส่วนของความคิดเห็น
				</PhotoContentWrapper>
			</PhotoModalWrapper>
		</ModalBlock>
	)
}

// ---
PhotoModal.propTypes = {
	// ---
	isOpenModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
	screenHeight: PropTypes.number,
	screenWidth: PropTypes.number,
}
// ---
const mapSizesToProps = ({ width, height }) => ({
	screenHeight: height,
	screenWidth: width,
})
// ---
export default withSizes(mapSizesToProps)(PhotoModal)
// ---

const PhotoUserWrapper = styled.div`
	padding-top: 10px;
`

const PhotoModalWrapper = styled.div`
	display: flex;
	width: auto;
	max-width: ${({ maxWidth }) => maxWidth}px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	flex-direction: ${({ isMobile }) =>
		isMobile ? 'column' : 'row'};

	${({ isMobile }) =>
		isMobile ? 'width: 100%;overflow-y: auto;' : ''};
`

const PhotoSourceWrapper = styled.div`
	background: #000;
	margin: 0px;
	display: flex;
	width: auto;
	align-items:center;
	${({ photoBlockWidth }) =>
		photoBlockWidth && `max-width: ${photoBlockWidth}px;`}
	${({ photoBlockHeight }) =>
		photoBlockHeight &&
		`max-height: ${photoBlockHeight}px;`}
	${({ isMobile, contentBlockHeight }) =>
		isMobile
			? `
				width: 100%;
				margin: 0px;
				max-width: 100%;
				`
			: ''}
`

const PhotoContentWrapper = styled.div`
	background: #fff;

	${({ contentBlockWidth }) =>
		contentBlockWidth && `width: ${contentBlockWidth}px;`}
	${({ contentBlockHeight }) =>
		contentBlockHeight &&
		`height: ${contentBlockHeight}px;`}
	${({ isMobile }) =>
		isMobile
			? `width: 100%; height: 100%; margin: 0px;max-width: 100%;`
			: 'overflow-y: auto;'};
`

const PhotoSource = styled.div`
	position: relative;
	width: auto;
	margin-bottom: -5px;
	${({ isMobile }) =>
		isMobile &&
		`
			width: 100%;
		`}
`

const PhotoSourcePreview = styled.img`
	width: auto;
	position: relative;
	object-fit: contain;
	padding: 0px;
	margin: 0px;
	max-width: ${({ photoBlockWidth }) => photoBlockWidth}px;
	max-height: ${({ photoBlockHeight }) =>
		photoBlockHeight}px;
	${({ isMobile }) =>
		isMobile &&
		`
			width: 100%;
			max-width: none;
			max-height: 100%;
		`}
`
