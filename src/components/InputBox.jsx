export default function InputBox({ placeholder }) {
    return (
        <input id="fname" name="fname" placeholder={placeholder} style={styles.inputBoxStyle} />
    )
}

const styles = {
    inputBoxStyle: {
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5
    }
}