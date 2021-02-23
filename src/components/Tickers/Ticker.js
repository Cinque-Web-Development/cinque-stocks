import React, {useState, useEffect} from 'react';
import Papa from 'papaparse'


export default function Ticker() {
    const [row, setRow] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('/data.csv')
            console.log(response)
            const reader = response.body.getReader()
            const result = reader.read()
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value)
            const results = Papa.parse(csv, {header: true})
            const rows = results.data
            console.log(rows)
            setRow(rows)
        }
        getData()
    }, [])

    

    return (
        <div>
            {row}
        </div>
    )
}
