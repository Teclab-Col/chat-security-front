import axios from 'axios';

import useContextProvider from '../../../context';
import Routes from '../../../api/routes.routes';
import { organizations as org } from '../../../components/tools/organizations';

const OrganizationsList = () => {

  const { setListChats } = useContextProvider();

  const handleOrzanization = async (organization:string) => {
    console.log('organization: ', organization);
    sessionStorage.setItem( "organization", organization );

    // @ts-ignore
    const routeApi = `${Routes.api.messageByOrganization}?org=${org[sessionStorage.getItem('organization')]}`;
    const response = await axios.get(routeApi);
    const data = response.data;
    setListChats(data);
  };


  return (
    <div className="flex justify-evenly items-center py-2">
      <p
        className="cursor-pointer"
        onClick={() => handleOrzanization("national-police")}
      >Policia Nacional</p>
      <p
        className="cursor-pointer"
        onClick={() => handleOrzanization("firefighters")}
      >Bomberos</p>
      <p
        className="cursor-pointer"
        onClick={() => handleOrzanization("insp-tto")}
      >INSP TTO</p>
      <p
        className="cursor-pointer"
        onClick={() => handleOrzanization("military-gaul")}
      >Gaula Militar</p>
      <p
        className="cursor-pointer"
        onClick={() => handleOrzanization("national-army")}
      >Ejercito nacional</p>
      <p
        className="cursor-pointer"
        onClick={() => handleOrzanization("anti-narcotics")}
      >Antinarcoticos</p>
    </div>
  )
}

export default OrganizationsList
