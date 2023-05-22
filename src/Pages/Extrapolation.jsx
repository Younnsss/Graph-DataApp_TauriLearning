import React, { useEffect, useState } from "react";
import { addDays, format } from 'date-fns'
import Graph from "./Graph";

function Extrapolation() {

    const [result, setResult] = useState(false);
    const [meIni, setMeIni] = useState(0);
    const [nbJours, setNbJours] = useState(0);
    const [date, setDate] = useState("");
    const [dataArray, setDataArray] = useState([]);

    const currentDate = new Date();
    const graphLabel = "Marge à l'encrassement";


    function calcul() {
        let Nbjours = Math.trunc(((meIni - 0.1) / 0.000232) / 24);
        setNbJours(Nbjours);
        setDate(format(addDays(currentDate, Nbjours), 'dd MMM yyyy'));
        let data = [];
        let cpt = 0;
        while (Nbjours - cpt > 0) {
            let result = meIni - (0.000232 * (24 * cpt));
            let jour = parseInt((addDays(new Date(), cpt)).getTime() / 1000)
            data.push([`${jour}`, `${result}`]);
            cpt++;
        }
        console.log(data);
        setDataArray(data);
        setResult(true);
    }

    return (
        <>
            <React.StrictMode>
                {result ? <>
                    <a
                        className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
                        href="#"
                    >
                        <div className="pt-4 text-gray-500">
                            <i className="fas fa-chart-line text-3xl"></i>

                            <p className="mt-2 hidden text-lg sm:block">
                                Marge à l'encrassement initial : {meIni}
                            </p>

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                                L'encrassement limite sera atteint le : {date} (+ {nbJours} jours)
                            </h3>

                            <section className="w-[60vw] h-[50vh] mx-auto mt-6">
                                <Graph dataArray={dataArray} dataName={graphLabel} />
                            </section>
                        </div>

                        <button
                            className="rounded-full bg-red-100 px-3 py-1 font-medium text-xl"
                            onClick={() => { setResult(false) }}
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </a></>
                    :
                    <>
                        <div className="flex gap-10 flex-col w-full h-full justify-center items-center">
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-3xl max-w-md"
                                placeholder="Marge à l'encrassement initial"
                                type="tel"
                                onChange={(e) => { setMeIni(e.target.value) }}
                            />
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                onClick={() => { calcul() }}
                            >
                                Extrapoler
                            </button>
                        </div>

                    </>}

            </React.StrictMode>
        </>
    );
}

export default Extrapolation;
