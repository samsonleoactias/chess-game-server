import { PieceLocations } from "../../../types"

const mapPieceLocationsDbToObject = (object: object) {
    const pieceLocations: PieceLocations = {
        humanPawnA: {
            row: object.human_pawn_a_row,
            column: object.human_pawn_a_column,
            captured: object.human_pawn_a_captured
        },
        
    };

    pieceLocations.humanPawnA = {
        row: object.human_pawn_a_row,
        column: object.human_pawn_a_column,
        captured: object.human_pawn_a_captured
    }