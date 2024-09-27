
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

 
  if (!mailboxes || mailboxes.length === 0) return <h1>No Mailboxes Found</h1>;

  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) return <h1>Mailbox Not Found!</h1>;

  return (
    <div>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;