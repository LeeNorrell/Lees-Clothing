import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../App.css';

const styles = {
  bar: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "4px"
  },
  

}

export default function DropdownBar() {
  return (
    <div style={styles.bar}>
      <div style={styles.button}>
    <DropdownButton id="dropdown-item-button" title="Clothing Type">
      <Dropdown.ItemText>Please select one of the products below</Dropdown.ItemText>
      <Dropdown.Item as="button">Tee-Shirts</Dropdown.Item>
      <Dropdown.Item as="button">Long-Sleeve</Dropdown.Item>
      <Dropdown.Item as="button">Dress-Shirt</Dropdown.Item>
      <Dropdown.Item as="button">Hoodies/Coats</Dropdown.Item>
      <Dropdown.Item as="button">Shorts</Dropdown.Item>
      <Dropdown.Item as="button">Pants</Dropdown.Item>
    </DropdownButton>
      </div>
      <div style={styles.button}>
    <DropdownButton id="dropdown-item-button" title="Size">
    <Dropdown.ItemText>Please Select Size</Dropdown.ItemText>
    <Dropdown.Item as="button">Small</Dropdown.Item>
    <Dropdown.Item as="button">Medium</Dropdown.Item>
    <Dropdown.Item as="button">Large</Dropdown.Item>
    <Dropdown.Item as="button">XL</Dropdown.Item>
    <Dropdown.Item as="button">XXL</Dropdown.Item>
    <Dropdown.Item as="button">XXXL</Dropdown.Item>
  </DropdownButton>
      </div>
      <div style={styles.button}>
  <DropdownButton id="dropdown-item-button" title="Price">
      <Dropdown.ItemText>Please select price range</Dropdown.ItemText>
      <Dropdown.Item as="button">$20-50</Dropdown.Item>
      <Dropdown.Item as="button">$50-100</Dropdown.Item>
      <Dropdown.Item as="button">$100+</Dropdown.Item>
    </DropdownButton>
      </div>
    </div>
  );
}