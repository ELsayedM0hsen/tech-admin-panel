import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data;
};

const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`, config);

  return response.data;
};

const getProductBySupplier = async (supplierId) => {
  const response = await axios.get(`${base_url}product/supplier/${supplierId}`, config);

  return response.data;
};

const updateProduct = async (product) => {
  const response = await axios.put(
    `${base_url}product/${product.id}`, product.productData,
    // {
    //   title: product.productData.title,
    //   description: product.productData.description,
    //   category: product.productData.category,
    //   images: product.productData.images,
    // },
    config
  );

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}product/${id}`, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductBySupplier
}
export default productService;