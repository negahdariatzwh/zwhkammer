import { React } from "react";
import BirthDate from "../common/BirthDate";
import TdStatus from "../common/TdStatus";
import Gender from "../common/Gender";
function BaseInfo({ userInfo }) {
  return (
    <div className="small-box bg-info">
      <div className="inner">
        <h3>Information</h3>
        <table className="table col-md-12 ">
          <tr>
            <td>Aktive:</td>
            <td>
              <TdStatus active={userInfo.isActive} />
            </td>
            <td>email:</td>
            <td>
              <b>{userInfo.email}</b>
            </td>
          </tr>
          <tr>
            <td>Name: </td>
            <td>
              <b>{userInfo.firstName}</b>
            </td>
            <td>Nachname:</td>
            <td>
              <b>{userInfo.lastName}</b>
            </td>
          </tr>
          <tr>
            <td>Geburtsdatum: </td>
            <td>
              <b>
                <BirthDate birthDate={userInfo.birthDate} />
              </b>
            </td>
            <td>Geschlecht</td>
            <td>
              <Gender gender={userInfo.gender} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default BaseInfo;
