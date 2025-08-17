export const getHomepage = (req, res) => {
    return res.render('index', { message: "render success" })
}

export const getApiPage = (req, res) => {
    const domain = `${req.protocol}://${req.get('host')}`
    return res.render('api', { host: domain })
}