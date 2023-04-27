import Container from "@/components/container";
import { parseISO, format } from "date-fns";
import React from "react";

export default function Service({ authors, settings, services }) {


  function sortDatesAscending(arr) {
    return arr.sort((a, b) => new Date(a.myDate) - new Date(b.myDate));
  }

  const sortedArray = sortDatesAscending(services.servicelist);


  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Services
      </h1>

      {/* <div className="grid grid-cols-[24ch_auto] gap-4">
        <p>Date</p>
        <p>Description</p>
        
        {services?.servicelist.map((e) =>
          <React.Fragment key={e._key}>
            <time
              dateTime={e.myDate}>
                {format(
                  parseISO(e.myDate),
                  "MMMM dd, yyyy"
                )}
            </time>
            <p>{e.serviceDescription}</p>
          </React.Fragment>
        )}
      </div> */}
      {/* <table className="border-separate border-spacing-y-2"> */}
      <table>
        {/* <caption>Testing</caption> */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {sortedArray.map((e) =>
          // <tr className="border-y border-white" key={e._key}>
          <tr key={e._key}>
            <td className="w-3/12 p-3">
              <time
                dateTime={e.myDate}>
                {format(
                  parseISO(e.myDate),
                  "MMMM dd, yyyy"
                )}
              </time>  
            </td>
            <td className="w-9/12 p-3">{e.serviceDescription}</td>
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
