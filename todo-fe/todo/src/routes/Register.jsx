import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShowError } from '../components/errors';
import { RegisterUser } from '../store/userSlice';

const Register = () => {
  const [ formData, setFormData ] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
    phone_number: '',
    gender: 'male',
    age: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ error, setError ] = useState({});
  const genderMapping = {
    male: 'M',
    female: 'F',
    other: 'O'
  };

  const handleChange = (e) => {
    setError('');
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);

    if (e.target.name === "password" || e.target.name === "password2") {
      if (updated.password2 !== '' && updated.password !== updated.password2) {
        setError({ password: "Passwords don't match" });
      } 
    }
    if (e.target.name === "phone_number" && e.target.value.length > 10){
      setError({ phone_number: "Phone Number can't be greater than 10"});
    } else {
        setError({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mappedGender = genderMapping[formData.gender] ?? formData.gender;
    const payload = {
      ...formData,
      gender: mappedGender,
    };
    try {
      await dispatch(RegisterUser(payload));
      navigate('/login');
    } catch (err) {
      setError({ user: "Enable to create user"});
      
    }
  };

  return (
    <form className="row g-3 needs-validation register-form" noValidate onSubmit={handleSubmit}>
      {error.user && <ShowError errorMsg={error.user} />}
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustomUsername" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            name="username"
            value={formData.username}
            onChange={handleChange}
            aria-describedby="inputGroupPrepend"
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom03" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="validationCustom03"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom04" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="validationCustom04"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom05" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="validationCustom05"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          required
        />
        { error.password && <ShowError errorMsg={error.password} />}
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom06" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom06"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        {error.phone_number && <ShowError errorMsg={error.phone_number} />}
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom07" className="form-label">
          Gender
        </label>
        <select
          className="form-select"
          id="validationCustom07"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom08" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="validationCustom08"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div className="col-12 text-center">
        <button className="btn btn-primary" disabled={Object.keys(error).length > 0} type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
