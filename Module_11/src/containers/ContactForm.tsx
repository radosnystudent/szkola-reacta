import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { addMessage } from "../actions/messageActions";

export interface Props {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post(
                process.env.REACT_APP_CONTACT_FORM_SUBMIT_ADDRESS!,
                {
                    values: values,
                }
            );

            if (response.status === 200) {
                dispatch(addMessage("info", "Wiadomość wysłana"));
            }
        } catch (error) {
            dispatch(addMessage("danger", "Wiadomość nie została wysłana"));
        }
        reset();
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-component">
                <label>First name</label>
                <input
                    type="text"
                    {...register("firstName", {
                        required: "Name is required.",
                        maxLength: 20,
                    })}
                />
            </div>
            {errors.firstName && (
                <p className="errorMsg">{errors.firstName.message}</p>
            )}
            <div className="form-component">
                <label>First name</label>
                <input
                    type="text"
                    {...register("lastName", {
                        required: "Name is required.",
                        maxLength: 20,
                    })}
                />
            </div>
            {errors.lastName && (
                <p className="errorMsg">{errors.lastName.message}</p>
            )}
            <div className="form-component">
                <label>Email</label>
                <input
                    type="text"
                    {...register("email", {
                        required: "Email is required.",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid.",
                        },
                    })}
                />
            </div>
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <p>
                <input className="mybtn mybtn-action" type="submit" />
            </p>
        </form>
    );
};

export default ContactForm;
