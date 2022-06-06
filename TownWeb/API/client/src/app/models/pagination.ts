import { IProducts } from "./product"

export interface IPagination {
    pageIndex: number
    pageSize: number
    count: number
    data: IProducts[]
  }