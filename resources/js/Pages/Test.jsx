import React from "react";
import { Button } from "@mui/material";
import { Link } from '@inertiajs/react';
import { CategoryForm } from "./Compornents/CategoryForm";
import { InertiaForm } from "./Compornents/InertiaForm";
import { MuiField } from "./Compornents/MuiField";


const Test = () => {
    return (
      <>
        <Link href="/header" as="button" type="button">Header</Link>
        <Link href="/test" as="button" type="button">TestPage</Link>
        <Link href="/test2" as="button" type="button">TestPage2</Link>
        <Link href="/ref" as="button" type="button">RefTest</Link>
        <Link href="/upload" as="button" type="button">UploadTest</Link>
        <Link href="/showtest" as="button" type="button">ShowTest</Link>
        <br></br>

        


        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <CategoryForm />
        <InertiaForm />
        <MuiField />

      </>
    );
  };

export default Test;