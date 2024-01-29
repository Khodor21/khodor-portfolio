"use client";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/client");
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card className="p-4 shadow-md">
      <Title className="text-2xl mb-4">
        List of Swiss Federal Councillours
      </Title>
      <Table className="w-full border border-gray-300">
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableHeaderCell className="py-2">Name</TableHeaderCell>
            <TableHeaderCell className="py-2">Email</TableHeaderCell>
            <TableHeaderCell className="py-2">Message</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className="border-t text-center">
              <TableCell className="py-2">{item.name}</TableCell>
              <TableCell className="py-2">
                <Text>{item.email}</Text>
              </TableCell>
              <TableCell className="py-2">
                <Text>{item.message}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserTable;
