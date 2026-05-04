import { API_BASE_URL } from '../config'
import ItemForm from '../components/ItemForm'
import { useNavigate } from 'react-router-dom'

export default function Post() {
  const navigate = useNavigate();
  
  const handleAdd = async (item) => {
    try {
      const formData = new FormData();
      formData.append('title', item.title);
      formData.append('description', item.description);
      formData.append('status', item.status);
      formData.append('category', item.category);
      formData.append('contact', item.contact);
      if (item.imageFile) {
        formData.append('image', item.imageFile);
      }
      // If you have more fields, add them here

      const res = await fetch(`${API_BASE_URL}/items`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        alert('Reported successfully!');
        navigate('/browse');
      } else {
        alert('Failed to report item.');
      }
    } catch (e) {
      alert('Error submitting report.');
    }
  }

  return (
    <div className="py-10">
      <ItemForm onAdd={handleAdd} />
    </div>
  )
}