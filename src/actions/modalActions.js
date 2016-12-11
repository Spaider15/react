/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/10/2016.
 */
import { ACTIVATE_TABLE_ROW, ACTION_ON_MODAL_WINDOW } from './actionTypes'
export function activateTableRow(rowIndex) {
    return {
        type: ACTIVATE_TABLE_ROW,
        rowIndex
    }
}

export function actionOnModalWindow(modal, show) {
    return {
        type: ACTION_ON_MODAL_WINDOW,
        modal,
        show
    }
}
