import * as yup from "yup";

export const modalSchema = yup.object().shape({
    Address: yup.string().required("You need to add an address"),
    BusinessName: yup.string().required("You need to add a business name"),
    image: yup.string().optional()
})
