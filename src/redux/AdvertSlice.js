import { createSlice } from '@reduxjs/toolkit';

const advertSlice = createSlice({
    name: "advertElement",
    initialState: [{
        _id: "advert _id",
        title: "advert title",
        type: "advert type",
        price: 100,
        city: "advert city",
        delegation: "advert delegation",
        category: "advert category",
        subCategory: "advert subcategory",
        productCondition: "advert productCondition",
        imageAdvert: "advert imageAdvert"

    }
    ],
    reducers: {
        setAdvert: (state, action) => {
            return action.payload;
        }

    }
})

export const { setAdvert } = advertSlice.actions;
export default advertSlice.reducer;