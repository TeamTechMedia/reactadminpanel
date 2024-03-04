export interface DocumentsType {
  type: string;
  thumbnail: string;
  downloadLink: string;
}

export interface CarDocsCardProps {
  documents: DocumentsType[];
}
