
export const getProductData = async() =>{
    const apiUrl = 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn'
    const res = await fetch (apiUrl,{
    headers: {
    'X-TENMS-SOURCE-PLATFORM': 'web',
    accept: 'application/json'
}
    })

    if(!res.ok){
        throw new Error("Failed to fetch product data");
    }

    const data = await res.json();
    return data;
}