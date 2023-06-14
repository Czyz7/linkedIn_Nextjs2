import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { contactId } = router.query;
  const contact = contacts.find((contact) => contact.id === contactId);
  const nameParts = contact?.name?.split(" ") || [];
  const first = nameParts[0] || "";
  const last = nameParts[1] || "";

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <button onClick={handleGoBack}>Back</button>
      <h2>Contact: {last.toUpperCase()}, {first}</h2>
    </Layout>
  );
}
