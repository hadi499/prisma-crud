import ContactTable from "@/components/contact-table";
import { CreateButton } from "@/components/buttons";
import Search from "@/components/search";

const Contacts = async () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>

      <ContactTable />

      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default Contacts;
