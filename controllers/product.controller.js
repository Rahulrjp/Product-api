import productModel from "../models/schema.js"

export const getProducts = async (req, res) => {
    const { brand , type , name , sort , select} = req.query
    const queryObject = {}

    if (brand) {
        queryObject.brand = brand
    }
    if (type) {
        queryObject.type = type
    }
    if (name) {
        queryObject.name = {$regex : name , $options : 'i'}
    }

    let apiData =  productModel.find(queryObject)


    if(sort){
        let sortFix = sort.replace(',' , " ");
        apiData = apiData.sort(sortFix)
    }
    if(select){
        let selectFix = select.split(',').join(" ");
        apiData = apiData.select(selectFix)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)

    const data = await apiData
    res.status(200).json({ status: "success", length: data.length, data })
}