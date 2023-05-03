import Container from "@/components/container";
import { parseISO, format } from "date-fns";
import React from "react";
import sortDatesAscending from "@/utils/sortDate";

export default function Activities({ activities, filtered }) {

  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(today.getDate() - 1);

  function filterItemsByDate(arr) {
    if (filtered) {
      return arr.filter(item => {
        const itemDate = new Date(item.activityDate);
        return itemDate >= yesterday;
      });
    }
    return arr;
  }
  
  const sortedArray = sortDatesAscending(activities.activitylist, false);
  
  const filteredArray = filterItemsByDate(sortedArray);


  return (
    <Container>
      {/* <table className="border-separate border-spacing-y-2"> */}
      <table>
        {/* <caption>Testing</caption> */}
        <thead>
          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">Description</th>
          </tr>
        </thead>
        <tbody>
        {filteredArray.map((e) =>
          // <tr className="border-y border-white" key={e._key}>
          <tr key={e._key}>
            <td className="w-3/12 p-3">
              <time
                dateTime={e.activityDate}>
                {format(
                  parseISO(e.activityDate),
                  "EEEE, MMMM dd, yyyy"
                )}
              </time>  
            </td>
            <td className="w-9/12 p-3">{e.activityDescription}</td>
          </tr>
        )}
        </tbody>
      </table>
      {/* <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {sortDatesAscending?.map((e) =>
          <tr key={e._key}>
            <td>
              <time
                dateTime={e.myDate}>
                {format(
                  parseISO(e.myDate),
                  "MMMM dd, yyyy"
                )}
              </time>  
            </td>
            <td>{e.serviceDescription}</td>
          </tr>
        )}
        </tbody>
      </table> */}
    </Container>
  );
}
