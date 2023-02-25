import { useQuery } from "@tanstack/react-query";
import React from "react";

const PendingSeller = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["pending"],
    queryFn: () =>
      fetch("http://localhost:5000/pending").then((res) => res.json()),
  });
  console.log(sellers);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>

                <td>{user?.location}</td>
                <td>
                  <a className="btn btn-sm" target="blank" href={user?.nidPic}>
                    nid
                  </a>{" "}
                  <a className="btn btn-sm" target="blank" href={user?.photo}>
                    photo
                  </a>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">approved</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingSeller;
