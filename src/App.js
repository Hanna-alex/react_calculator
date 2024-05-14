import styles from './app.module.css'
import { useState } from 'react'

const NUMS = [
	{ val: '7' }, { val: '8' }, { val: '9' }, { val: '4' }, { val: '5' }, { val: '6' }, { val: '1' }, { val: '2' }, { val: '3' }, { val: '0' }
]
const operators = ['C', '+', '-', '=']



export const App = () => {
	const [operand1, setOperand1] = useState('0')
	const [operator, setOperator] = useState('')
	const [operand2, setOperand2] = useState('')
	const [result, setResult] = useState('')


	const clickBtn = (value) => {

		let newOperand = operator ? operand2 + value : operand1 + value
		newOperand = String(Number(newOperand))

		if (operator === '') {
			setOperand1(newOperand)
		} else {
			setOperand2(newOperand)
		}


	}

	const clickOperator = (value) => {

		const getResult = () => {
			if (operator === '+') {
				const result = Number(operand1) + Number(operand2)
				setResult(String(result))
			} else if (operator === '-') {
				const result = Number(operand1) - Number(operand2)
				setResult(String(result))
			}
		}

		const installOperatorOrOperand = () => {
			if (result === '') {
				setOperator(value)
			}
			else {
				setOperand1(result)
				setOperand2('')
				setOperator(value)
				setResult('')
			}
		}


		if (value === 'C') {
			setOperand1('0')
			setOperator('')
			setOperand2('')
			setResult('')
		}
		else if (value === '=') {
			getResult()

		}
		else {
			installOperatorOrOperand()

		}

	}


	return (
		<div className={styles.app}>
			<div className={styles.calculator}>
				<div className={styles.display}>
					<div>{operand1 + operator + operand2}</div>
					<div className={styles.result}>{result}</div>
				</div>

				<div className={styles.btnsGroup}>
					{NUMS.map((number) => <button key={number.val} value={number.val} className={styles.btnNumber} onClick={(e) => clickBtn(e.target.value)}>{number.val}</button>)}
				</div>
				<div className={styles.operatorsGrupp}>
					{operators.map((operator) => <button key={operator} value={operator} className={styles.operator} onClick={() => clickOperator(operator)}>{operator}</button>)}
				</div>
			</div>

		</div>
	);
}
