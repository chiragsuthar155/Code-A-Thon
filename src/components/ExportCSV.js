import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
export const ExportCSV = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div className="flex flex-row justify-center py-10">
      <button
        className="px-10 py-3 text-lg font-semibold bg-red-500 text-white"
        onClick={(e) => exportToCSV(csvData, fileName)}
      >
        Export
      </button>
    </div>
  );
};
