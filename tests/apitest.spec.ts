import {test,expect} from "@playwright/test";

test.describe("Api test case", async()=>{
    test("Api get",async({page,request})=>{
        const response = await request.get("https://reqres.in/api/users/2");
        console.log(response.status());
        expect(response.status()).toBe(200);
        const resp = await response.json();
        console.log(resp.id)
    })

    test("Api post",async({request})=>{
        const response = await request.post("https://reqres.in/api/users",
            {
                data :{
                 "name": "morpheus",
                 "job": "leader"
                }
    })
         expect(response.status()).toBe(201);
        const resp = await response.json();
        console.log(resp.id);
        expect(resp.id).toBeTruthy();
    })

    test("API get users", async({request})=>{
        const resp = await request.get("https://reqres.in/api/users");
        const response = await resp.json();
        const data = response.data;
        const ids = data.map((eachData: { id: any; }) => eachData.id)
        console.log(ids);
        await expect(ids).toHaveLength(6)

    })
})