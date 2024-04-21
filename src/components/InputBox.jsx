export default function InputBox({ Fieldname: FieldName, Type, Id}) {
    return (
        <div className="field flex flex-col">
            <label htmlFor={FieldName} className='block text-xl text-white'>{FieldName}</label>
            <input className='border-1 py-1 pl-3' type={Type} name={FieldName} id={Id} required />
        </div>
    )
}

const styles = {
    inputBoxStyle: {
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5
    }
}