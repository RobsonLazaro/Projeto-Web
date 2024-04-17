export default function ModalButton({ text, href }) {
    return (
        <button className="bg-green-800 text-white" href={href}>{text}</button>
    )
}

const styles = {
    ModalButtonStyle: {
        backgroundColor:'#1E6738',
        borderColor: '#fff'
    }
}