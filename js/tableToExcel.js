import XLSX from 'xlsx'
import FileSaver from 'file-saver'

/**
 * 导出网页表格为excel
 * @param name 导出表格名
 * @param table 需导出的表格标签
 * @param type 需导出的表格类型
 */
export default function (name, table, type='xlsx') {
  let tableObj = XLSX.utils.table_to_book(table);
  let excelFile = XLSX.write(tableObj, {bookType: type, bookSST: true, type: 'array'});
  try {
    FileSaver.saveAs(new Blob([excelFile],
        {type: 'application/octet-stream'}),
      name);
  } catch (e) {
    if (typeof console !== 'undefined')
      console.log(e, excelFile)
  }
}
