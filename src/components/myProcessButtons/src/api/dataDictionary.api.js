let DATA_DICTIONART_API = {
    //根据字典编码获取字典值
    findByDictionaryCode: (data) => {
        return AXIOS.postByQs( '/sysdictionarycategory/findDictionaryOptionsByUniqueName', {uniqueIdentityName: data});
    },
    getDictData: (dictionaryCode) => {
        return new Promise((resolve, reject) =>{
            DATA_DICTIONART_API.findByDictionaryCode(dictionaryCode).then((res) => {
                resolve(res.data.data);
            })
        })
    }
}

export default DATA_DICTIONART_API;
