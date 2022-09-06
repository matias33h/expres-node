const ctrlHome = {}

//  estudiar concepto los metodos de envio get post put delete

ctrlHome.getHome = (req, res) => {
    res.send({

        message: 'llegaste'
    })
}

module.exports = ctrlHome;