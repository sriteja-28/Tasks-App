const Project = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg"  style={{ backgroundColor: "#e3f2fd" }}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://login-page-in-react-ts.vercel.app/">Login Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://feature-rich-document-writer.vercel.app">Document writer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://draw-io-ten.vercel.app">Drawing io</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://report-exporter.vercel.app">Report Exporter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://ocr-scanner-app.vercel.app">OCR Scanner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://qr-code-and-barcode-generator.vercel.app">OR and Bar code Generator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://pincode-fetcher-app.vercel.app">Fetching Pincode</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 style={{ textAlign: "center" }}>Tasks</h1>

        </>
    )
}
export default Project;