import styled, { keyframes, css } from 'styled-components'
import Colors from '../../styles/colors'

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
