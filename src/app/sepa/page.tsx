import Form from "./components/form";
import { getAccounts } from "./network";

export const dynamic = 'force-dynamic'

export default async function SepaPage() {
  const { data } = await getAccounts();

  return <Form data={data} />;
}
