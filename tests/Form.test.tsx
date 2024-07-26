// // path: /tests/Form.test.tsx
// import { render, screen, fireEvent } from "@testing-library/react";
// import { Form } from "../components/Form";

// const mockContextValue = {
//   selectedProducts: [
//     { src: "product1.jpg", name: "Produto 1" },
//     { src: "product2.jpg", name: "Produto 2" },
//   ],
//   removeProduct: jest.fn(),
// };

// test("displays error message for empty fields", () => {
//   render(
//     <SelectedProductsContext.Provider value={mockContextValue}>
//       <Form />
//     </SelectedProductsContext.Provider>
//   );

//   const submitButton = screen.getByRole("button", { name: /entrar em contato/i });
//   fireEvent.click(submitButton);

//   expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
//   expect(screen.getByText("Último nome é obrigatório")).toBeInTheDocument();
//   expect(screen.getByText("Email é obrigatório")).toBeInTheDocument();
//   expect(screen.getByText("Celular é obrigatório")).toBeInTheDocument();
// });

// test("displays error message for invalid email", () => {
//   render(
//     <SelectedProductsContext.Provider value={mockContextValue}>
//       <Form />
//     </SelectedProductsContext.Provider>
//   );

//   const emailInput = screen.getByLabelText(/email/i);
//   const submitButton = screen.getByRole("button", { name: /entrar em contato/i });

//   fireEvent.change(emailInput, { target: { value: "invalid-email" } });
//   fireEvent.click(submitButton);

//   expect(screen.getByText("Email inválido. Por favor, insira um email válido.")).toBeInTheDocument();
// });

// test("displays error message for invalid phone number", () => {
//   render(
//     <SelectedProductsContext.Provider value={mockContextValue}>
//       <Form />
//     </SelectedProductsContext.Provider>
//   );

//   const phoneInput = screen.getByLabelText(/celular/i);
//   const submitButton = screen.getByRole("button", { name: /entrar em contato/i });

//   fireEvent.change(phoneInput, { target: { value: "invalid-phone" } });
//   fireEvent.click(submitButton);

//   expect(screen.getByText("Celular inválido. Por favor, insira um número válido.")).toBeInTheDocument();
// });

// test("removes a product when the remove button is clicked", () => {
//   render(
//     <SelectedProductsContext.Provider value={mockContextValue}>
//       <Form />
//     </SelectedProductsContext.Provider>
//   );

//   const removeButtons = screen.getAllByText("×");
//   fireEvent.click(removeButtons[0]);

//   expect(mockContextValue.removeProduct).toHaveBeenCalledWith("product1.jpg");
// });

// test("navigates to Products section when 'Adicionar mais produtos' is clicked", () => {
//   global.window.location.href = jest.fn();

//   render(
//     <SelectedProductsContext.Provider value={mockContextValue}>
//       <Form />
//     </SelectedProductsContext.Provider>
//   );

//   const addMoreButton = screen.getByText("Adicionar mais produtos +");
//   fireEvent.click(addMoreButton);

//   expect(global.window.location.href).toBe("#Products");
// });

// test("navigates to WhatsApp with correct message when form is submitted", () => {
//   global.window.location.href = jest.fn();

//   render(
//     <SelectedProductsContext.Provider value={mockContextValue}>
//       <Form />
//     </SelectedProductsContext.Provider>
//   );

//   fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "José" } });
//   fireEvent.change(screen.getByLabelText(/último nome/i), { target: { value: "Araujo" } });
//   fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jose@example.com" } });
//   fireEvent.change(screen.getByLabelText(/celular/i), { target: { value: "83999010101" } });
//   fireEvent.click(screen.getByRole("button", { name: /entrar em contato/i }));

//   const expectedMessage = "Olá, tenho interesse em adquirir os serviços da JairoCap.%0A%0ANome: José%0AÚltimo nome: Araujo%0AEmail: jose@example.com%0ACelular: 83999010101%0AProdutos: product1.jpg, product2.jpg";
//   const expectedUrl = `https://wa.me/558399990100?text=${expectedMessage}`;

//   expect(global.window.location.href).toBe(expectedUrl);
// });
