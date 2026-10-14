export interface NodoDB {
    id?: string;
    nombre: string;
    tipo: 'carpeta' | 'archivo';
    padreId: string;
    creadoPor: string;
    creadoEn: number;
}