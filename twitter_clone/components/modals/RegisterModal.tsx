import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";


const RegisterModal= () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    // to toggle b/n signup  to signin
    const onToggle = useCallback(() => {
      if (isLoading) {
        return;
      }
      registerModal.onClose();
      loginModal.onOpen();
    }, [loginModal, registerModal, isLoading]);
    const onSubmit = useCallback(async () => {
        try {
          setIsLoading(true);
    //I need to Register 
    registerModal.onClose();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
}, [registerModal]);
const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading} 
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Already have an account?
        <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Sign in</span>
      </p>
    </div>
  )
    return (
        <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onSubmit={onSubmit}
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
       />
    );
}
export default RegisterModal;