import { createSlice } from "@reduxjs/toolkit";
// создаём начальное значение нашего state в store которое будет по умолчанию отображаться
const initialState = {
  categoryId: 0,
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
    }
  },
});
// экспортируем наши action указывая откуда брать их
export const { setCategoryId, setSort } = filterSlice.actions;
// экспортируем reducer из slice(state)
export default filterSlice.reducer;
