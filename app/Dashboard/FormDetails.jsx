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
        const response = await axios.get(
          "https://portfolio-backend2024.vercel.app/api/client"
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card className="p-4 shadow-md border-t">
      <Title className="text-2xl mb-4 arabic text-right ">
        رســـــائل العُملاء
      </Title>
      <Table className="w-full border border-third">
        <TableHead>
          <TableRow className="bg-third">
            <TableHeaderCell className="py-2 text-main ibmsemi">
              الإيميل
            </TableHeaderCell>
            <TableHeaderCell className="py-2 text-main ibmsemi">
              الرسالة
            </TableHeaderCell>
            <TableHeaderCell className="py-2 text-main ibmsemi">
              الإسم
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.name}
              className="border-t text-center text-third arabic"
            >
              <TableCell className="py-2">
                <Text>{item.email}</Text>
              </TableCell>
              <TableCell className="py-2">
                <Text>{item.message}</Text>
              </TableCell>
              <TableCell className="py-2">
                <Text>{item.name}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserTable;
