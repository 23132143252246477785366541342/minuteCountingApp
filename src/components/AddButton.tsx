export const AddButton = ({amount, addTime} : {amount: number, addTime: any}) => {
	return (
        <button onClick={() => addTime(amount)} className="grid-item">
            <code>{amount}</code>
        </button>
    )
};