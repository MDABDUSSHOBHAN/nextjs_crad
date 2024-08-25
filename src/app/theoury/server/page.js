import { fetchapi } from "@/action";





async function Server() {


  const api = await fetchapi();
  console.log(api);
  return <div>

    <h4>This is for server action example </h4>

    {

      <ul>
        {
          api && api.length >0 ?
          api.map(item=> <li>
            {item.title}
          </li>): <h3>Data not found </h3>
        }
      </ul>
    }


  </div>;
}

export default Server;