(function main(){
    const root = document.getElementById('detail-image')
    const id = document.getElementById()
    const getDetailImage = async()=>{
        const data = await fetch(`http://localhost:3000/image/${id}`)
        return data
    }
    const constructHtml = async()=>{

    }
})()