import { PieceLocations } from "../../../types"

const mapPieceLocationsDbToObject = (pieceLocationsDb: PieceLocationsDb) {
    const pieceLocations: PieceLocations = {
        humanPawnA: {
            row: pieceLocationsDb.human_pawn_a_row,
            column: pieceLocationsDb.human_pawn_a_column,
            captured: pieceLocationsDb.human_pawn_a_captured
        },

    };

    pieceLocations.humanPawnA = {
        row: pieceLocationsDb.human_pawn_a_row,
        column: pieceLocationsDb.human_pawn_a_column,
        captured: pieceLocationsDb.human_pawn_a_captured
    }