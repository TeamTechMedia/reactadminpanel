export type QCStatusType = "PENDING" | "Rejected" | "VERIFIED";

export const qcStatus = {
  PENDING: "warning",
  Rejected: "error",
  VERIFIED: "success",
};

export function getQCColor(qcStat: QCStatusType) {
  return qcStatus[qcStat];
}
