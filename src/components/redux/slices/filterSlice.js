import { createSlice } from "@reduxjs/toolkit";
// создаём начальное значение нашего state в store которое будет по умолчанию отображаться
const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    namee: "популрности",
    sortProperty: "rating",
  },
};
// создаём экспортируемый slice(state), даём ему имя, передаём начальное значение, и прописываем reducers. Внктри же создаём функции для обработки наших action(методы обновления состояния)
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action){
      state.sort = action.payload
    },
    setCurrentPage(state, action){
      state.currentPage = action.payload;
    },
    setFilters(state, action){
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
      },
    },
});
// экспортируем наши action указывая откуда брать их
export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;
// экспортируем reducer из slice(state)
export default filterSlice.reducer;
