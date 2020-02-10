import styled, { keyframes, css } from 'styled-components'
import Colors from '../../styles/colors'

export const Container = styled.div`
	max-width: 700px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	padding: 30px;
	margin: 80px auto;

	h1 {
		font-size: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;

		svg {
			margin-right: 10px;
		}
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: row;
	margin-top: 30px;

	input {
		flex: 1;
		border: 1px solid #eee;
		border-radius: 4px;
		font-size: 16px;
		padding: 10px 16px;
	}
`

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`

export const SubmitButton = styled.button.attrs(props => ({
	type: 'submit',
	disabled: props.loading,
}))`
	background: ${Colors.primary};
	border: 0;
	padding: 0 15px;
	margin-left: 10px;
	border-radius: 4px;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	${props =>
		props.loading &&
		css`
			svg {
				animation: ${rotate} 1.5s linear infinite;
			}
		`}
`

export const List = styled.ul`
	list-style: none;
	margin-top: 30px;

	li {
		& + li {
			border-top: 1px solid #eee;
		}

		padding: 15px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		a {
			color: ${Colors.primary};
			text-decoration: none;
		}
	}
`