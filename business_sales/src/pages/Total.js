import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Table, Row, Col, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const products = [
  { id: 1, name: "Egg - o Bite", price: 15 },
  { id: 2, name: "Narli", price: 15},
  { id: 3, name: "Jowarie", price: 15 },
  { id: 4, name: "Product 4", price: 199 },
  { id: 5, name: "Product 5", price: 1229 },
  { id: 6, name: "Product 6", price: 999 },
];

function ShoppingBill() {
  const cart = useSelector((state) => state.cart.cart);
  const total = Object.keys(cart).reduce((sum, id) => {
    const product = products.find((p) => p.id === Number(id));
    return sum + (cart[id] * product.price);
  }, 0);

  return (
    <>
      {/* Navbar
      <Navbar bg="dark" variant="dark" className="p-3">
        <Navbar.Brand href="#">Shopping App</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Home</Navbar.Text>
          <Navbar.Text className="mx-3">Link</Navbar.Text>
          <Navbar.Text className="text-muted">Disabled</Navbar.Text>
        </Navbar.Collapse>
      </Navbar> */}

      <Container className="mt-5">
        <Row className="text-center">
          <Col>
            <h2 className="fw-bold">
              <FaShoppingCart className="text-primary" /> Shopping Bill
            </h2>
          </Col>
        </Row>

        {/* Shopping Table */}
        <Table striped bordered hover className="mt-4">
          <thead className="bg-dark text-light">
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((id) => {
              const product = products.find((p) => p.id === Number(id));
              if (!cart[id]) return null;
              return (
                <tr key={id}>
                  <td>{product.name}</td>
                  <td>{cart[id]}</td>
                  <td>Rs {product.price}</td>
                  <td>Rs {cart[id] * product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* Grand Total Section */}
        <Row className="text-center mt-4">
          <Col>
            <h3 className="fw-bold text-success">Grand Total: Rs {total}</h3>
            <p className="text-muted">Thank you for shopping with us! 🛍️</p>
            <Button variant="primary" size="lg" className="mt-3">
              Proceed to Checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShoppingBill;
