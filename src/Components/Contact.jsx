import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <div className=" container TitleSection">
                            <header className="page-head">
                                <h1>Контакты</h1>
                            </header>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-7 col-sm-12">
                                <p>Тут вы можете со мной связаться</p>
                                <p>а что бы и нет?
                                    <strong> номер такой-то: 1-234-567-8910-1234</strong></p>
                            </div>
                            <div className="col-xs-12 col-md-5 col-sm-12">
                                <div className="jumbotron">
                                    <h3>Address Info</h3>
                                    <address>
                                        <strong>Company, Inc.</strong>
                                        795 Folsom Ave, Suite 600 San Francisco, CA 94107
                                        <abbr title="Phone">Tel:</abbr> (123) 456-7890
                                        <abbr title="Fax">Fax:</abbr> (123) 456-7890
                                    </address>
                                    <address>
                                        <strong>Email</strong> <a href="mailto:#">first.last@example.com</a>
                                        <strong>website</strong> <a href="#page13">www.company.com</a>
                                    </address>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;