import {onBeforeUnmount, onMounted, ref} from "vue";
export default function () {
    let pageSize = ref(10),
        pageNumber = ref(1);
    function resetPage(){
        pageNumber.value = 1
    }
    function handleChangePageNumber(val){
        pageNumber.value = val
    }
    function handleChangePageSize(val){
        pageSize.value = val
    }
    return {
        pageSize,
        pageNumber,
        resetPage,
        handleChangePageNumber,
        handleChangePageSize,
    }
}
