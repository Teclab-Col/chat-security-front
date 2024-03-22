import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [organization, setOrganization] = useState('');
  // const [password, setpassword] = useState('');
  
  const setLogin = async (e:MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      
      if (!organization) return;
      sessionStorage.setItem( 'organization', organization );
      navigate('/chat')

      console.log('username: ', organization);

    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className='w-64 mx-auto mb-12'>
        <select 
          id="organization" 
          className='block w-full rounded-sm p-2 mb-2 border'
          value={organization} 
          onChange={ev => setOrganization(ev.target.value)}
        >
          <option value="">Organización</option>
          <option value="national-police">Policia Nacional</option>
          <option value="firefighters">Bomberos</option>
          <option value="insp-tto">INSP TTO</option>
          <option value="military-gaul">Gaula Militar</option>
          <option value="national-army">Ejercito nacional</option>
          <option value="anti-narcotics">Antinarcoticos</option>
        </select>
        {/* <input 
          type="text" 
          placeholder="Organización" 
          className='block w-full rounded-sm p-2 mb-2 border'
          required
          value={organization}
          onChange={ev => setOrganization(ev.target.value)}
        /> */}
        {/* <input 
          type="password" 
          placeholder="password" 
          className='block w-full rounded-sm p-2 mb-2 border'
          required
          value={password}
          onChange={ev => setpassword(ev.target.value)}
        /> */}
        <button 
          className='bg-blue-500 text-white block w-full rounded-sm p-2'
          onClick={setLogin}
        >Registrate</button>
      </form>
    </div>
  )
}

export default Register
