export type QCStatusType = "PENDING" | "Rejected";

export const qcStatus = {
  PENDING: "warning",
  Rejected: "error",
  APPROVED: "success",
};

export function getQCColor(qcStat: QCStatusType) {
  return qcStatus[qcStat];
}
