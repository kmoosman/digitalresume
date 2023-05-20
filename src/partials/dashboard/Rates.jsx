import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconStyling } from "../../utils/Utils";

export const Rates = () => {
  return (
    <div className="col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Rates</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Platform</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Fee</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={iconStyling["TikTok"]}
                      className="text-slate-800 w-5 h-5 ml-2"
                    />
                    <div className="text-slate-800 ml-5">TikTok</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">fm $500</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={iconStyling["Twitter"]}
                      className="text-slate-800 w-5 h-5 ml-2"
                    />
                    <div className="text-slate-800 ml-5">Twitter</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">fm $100</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={iconStyling["Instagram"]}
                      className="text-slate-800 w-5 h-5 ml-2"
                    />
                    <div className="text-slate-800 ml-5">Instagram</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">fm $100</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={iconStyling["YouTube"]}
                      className="text-slate-800 w-5 h-5 ml-2"
                    />
                    <div className="text-slate-500 ml-5">YouTube</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">fm $300</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
