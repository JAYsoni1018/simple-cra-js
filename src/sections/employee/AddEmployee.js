import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { usePopover } from 'src/components/custom-popover';
import FormProvider from 'src/components/hook-form/form-provider';
import { Alert, AlertTitle, Box, Card, Grid, Stack } from '@mui/material';
import { RHFTextField } from 'src/components/hook-form';
import { LoadingButton } from '@mui/lab';
// components

function AddEmployee() {
    const [done, setDone] = useState(false);

    const NewTypesSchema = Yup.object().shape({
        emp_id: Yup.string().max(50).required('Employee ID is required'),
        emp_name: Yup.string().max(50).required('Employee Name is required'),
        // last_name: Yup.string().max(50).required('Last is required'),
        email_id: Yup.string().required('Email is required'),
        phone_no: Yup.number().max(10).required('Phone number is required'),
        emp_role: Yup.string().required('Employee Role is required'),
        emp_department: Yup.string().required('Employee Department is required'),


    });
    const defaultValues = useMemo(
        () => ({
            emp_id: '',
            first_name: '',
            last_name: '',
            email_id: '',
            phone_no: '',
            emp_role: '',
            emp_department: '',
        }),
        []
    );
    const methods = useForm({
        resolver: yupResolver(NewTypesSchema),
        defaultValues,
    });
    const popover = usePopover();
    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;
    const onSubmit = handleSubmit(async (data) => {
        try {
            // console.log('data', data);
        } catch (error) {
            alert('Check your internet connectivity');
            console.log('error in handleSubmit of Add Categories');
            console.log('error: ', error);
        }
    });
    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid xs={20} md={15}>
                <Card sx={{ p: 1 }}>
                    <Box
                        rowGap={3}
                        columnGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                        }}
                    >
                        <RHFTextField name="emp_id" label="Enter Employee ID*" />
                        <RHFTextField name="emp_name" label="Enter Full Name Name *" />
                        {/* <RHFTextField name="last_name" label="Enter last name *" /> */}
                        <RHFTextField name="email_id" label="Enter email_id *" />
                        <RHFTextField name="phone_no" label="Enter phone no *" />
                        <RHFTextField name="emp_role" label="Enter role *" />
                        <RHFTextField name="emp_department" label="Enter department *" />

                    </Box>
                    {done && (
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Employee added successfully!
                        </Alert>
                    )}

                    <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                        <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                            Add Employee
                        </LoadingButton>
                    </Stack>
                </Card>
            </Grid>
        </FormProvider>
    );
}

export default AddEmployee;
