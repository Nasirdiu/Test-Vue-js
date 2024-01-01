<script setup>

import axios from 'axios';
import { ref } from 'vue';

const tableData = ref([]);

list();
async function list() {
    let url = "https://crud.teamrabbil.com/api/v1/ReadProduct"
    let res = await axios.get(url)
    let data = res.data['data']
    tableData.value = data;
}
</script>
<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    No
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Id
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    ProductName
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    ProductCode
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    UnitPrice
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Qty
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    TotalPrice
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    CreatedDate
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for=" (item, index) in tableData" :key="index" class="bg-gray-100 border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['_id'] }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['ProductName'] }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['ProductCode'] }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['UnitPrice'] }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['Qty'] }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['TotalPrice'] }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ item['CreatedDate'] }}
                                </td>
                                <button type="button"
                                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>

                                <button type="button"
                                    class=" ml-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
