import storeMake from '../../redux/store';
export const getAuthToken = () => {
  return "234"
};
export const getUid = () => {
  
  return "123"
};

const defaultAddationalOptions = {
  withAuth: false,
  canJson: true,
  isFormData: false,
};
export default async (
  URL,
  options,
  addationalOptions = defaultAddationalOptions,
) => {
  

  const {withAuth, canJson, isFormData} = {
    ...defaultAddationalOptions,
    ...addationalOptions,
  };
  
  const authToken = getAuthToken();
  var myHeaders = new Headers();
  if (isFormData) {
    myHeaders.append('Content-Type', 'multipart/form-data');
  } else {
    myHeaders.append('Content-Type', 'application/json');
  }
  myHeaders.append('lanCode', 'en');
  if (withAuth && authToken) {
    myHeaders.append('Authorization', `Bearer ${authToken}`);
  }
  //console.log({authToken});
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    ...options,
  }; 
  
  const respounce = await fetch(URL, requestOptions).catch((err) => {
    console.log('in request', err);
  }); 


  return await canBeJson(respounce, canJson);
};

const canBeJson = async (respounce, canJson) => {
  if (canJson) return await respounce?.json();
  return await respounce?.text();
};