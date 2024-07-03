import { RowID, RowElement} from './interface';

/*define function prototype*/
declare function insertRow(row: RowElement) : number;
declare function deleteRow(rowId: RowID): undefined;
declare function updateRow(rowId: RowID, row: RowElement): number;
