import { FiltersObject } from "../models/filters.model";

export function setFilters(filtersObj: FiltersObject): string {
  let mainQuery: string = '';

  mainQuery = `${this.setPriceFilter(filtersObj)}`;
  mainQuery += `${this.setCategoryFilter(filtersObj)}`;
  mainQuery += `${this.setStockFilter(filtersObj)}`;
  
  (mainQuery === 'undefined') ? mainQuery = '' : mainQuery;
  (mainQuery.match('null')) ? mainQuery = mainQuery.replace('null', '') : mainQuery;

  return mainQuery;
}

export function setPriceFilter(filtersObj: FiltersObject): string {
  if (filtersObj && filtersObj.price) {
    if (!filtersObj.price['from'] && !filtersObj.price['to']) {
      return '';
    }
    if (filtersObj.price['from'] || filtersObj.price['to']) {
      return `?price=${filtersObj.price['from']} to ${filtersObj.price['to']}`;
    }
  }
}

export function setCategoryFilter(filtersObj: FiltersObject): string {
  if (filtersObj && filtersObj.category) {
    if (filtersObj.price['from'] || filtersObj.price['to']) {
      return `&category=${filtersObj.category}`;
    } else {
      return `?category=${filtersObj.category}`;
    }
  } else {
    return '';
  }
}

export function setStockFilter(filtersObj: FiltersObject): string {
  if (filtersObj && filtersObj.stock) {
    if ((!filtersObj.price['from'] && !filtersObj.price['to']) && !filtersObj.category) {
      return `?stock=${filtersObj.stock}`;
    } else {
      return `&stock=${filtersObj.stock}`;
    }
  } else {
    return '';
  }
}