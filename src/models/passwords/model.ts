export interface Password {
 id: string;
 klasifikacija: string;
 naziv: string;
 karakteristikaA: string;
 karakteristikaB: string;
 karakteristikaC: string;
 karakteristikaD: string;
 karakteristikaE: string;
}

export type ColumnNames =
 | "id"
 | "klasifikacija"
 | "naziv"
 | "karakteristikaA"
 | "karakteristikaB"
 | "karakteristikaC"
 | "karakteristikaD"
 | "karakteristikaE";
