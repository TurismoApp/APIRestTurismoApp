export interface reposComplement  {

    getAll();

    getOne(id: number);

    insertAll(data: any[]);

    insertOne(data: any);
}