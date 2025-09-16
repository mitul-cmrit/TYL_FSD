function Header(props) {
    const a = props.parentData;
    return (
        <>
            <div class="page-header" style={{ textAlign: 'center' }}>
                I'm The Header
                <br />
                <button type="button" onClick="window.print()" style={{ backgroundColor: 'pink' }}>
                    PRINT ME!
                </button>
                <p>{a}</p>
                <p>{props.parentData}</p>
            </div>
        </>
    )
}

export default Header;