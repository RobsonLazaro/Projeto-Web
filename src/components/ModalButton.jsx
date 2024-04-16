export default function ModalButton({ text, href }) {
    return (
        <button href={href}>{text}</button>
    )
}

const styles = {
    ModalButtonStyle: {
        backgroundColor:'#1E6738',
        borderColor: '#fff'
    }
}