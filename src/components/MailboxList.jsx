import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
    console.log('MailboxList mailboxes:', mailboxes);
    return (
    <div>
        <h1>Mailbox List</h1>
        {mailboxes.map((mailbox) => (
            <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box">
                Mailbox {mailbox._id}
            </Link>
        ))}
    </div>
    );
};
export default MailboxList;