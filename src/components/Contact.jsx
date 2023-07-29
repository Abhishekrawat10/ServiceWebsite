import "../styles/Contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Abc"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Abc@xyz.com"></input>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" placeholder="Leave Message...."></input>
                </div>
                <button type="Submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact