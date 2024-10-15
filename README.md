# Doctor Profile and Appointment Booking Page

This project is a React component for a doctor's profile and appointment booking page. It allows users to view the doctor's details, follow them on social media, see their areas of expertise, and book appointments with options to select the type of session and time slots.

#PREVIEW
(https://drive.google.com/file/d/1S8Im1Ilerayxw52FdP5VumZYmJoE9aFK/view?usp=sharing)

## Features

- **Doctor Profile**: Displays the doctor's name, specialization, rating, and basic information.
- **Follow Section**: Includes options to follow the doctor and see the count of followers, following, and posts.
- **Appointment Booking**: 
  - Users can select the mode of the session (In-Clinic, Video, Chat).
  - Pick a time slot from the available dates and times.
  - Book an appointment by clicking on the "Make An Appointment" button.
- **About Me**: Provides a short description of the doctor's background and experiences.
- **Specialization and Concerns**: Showcases the fields the doctor specializes in and the common concerns they treat.
- **Experience**: Lists the doctor's work experience in various hospitals.
- **Featured Reviews**: Displays reviews from patients along with ratings.

## Tech Stack

- **React**: For building the user interface and handling state with hooks (`useState`).
- **React Icons**: Uses icons from libraries like `react-icons/md`, `react-icons/fa6`, `react-icons/ai`, and more.
- **CSS**: For styling the components (styles are imported from `index.css`).

## Component Structure

- **Home Component**: The main component that renders the doctor's profile and appointment booking interface.
- **State Management**:
  - `selectedType`: Tracks the selected mode of the session (e.g., Video, In-Clinic).
  - `selectedDate`: Tracks the selected date for the appointment.
- **Handlers**:
  - `handleTypeSelect`: Updates the selected session type.
  - `handleDateSelect`: Updates the selected date.

## How to Use

1. **Clone the Repository**:
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm start
    ```
   This will start the application, and you can view it in your browser at `http://localhost:3000`.

4. **Book an Appointment**:
   - Select the mode of session (e.g., Video).
   - Choose a date and time slot.
   - Click on "Make An Appointment" to confirm your booking.

## Folder Structure

- `src/`
  - `components/`
    -`Header.js` 
    -`Home.js`: The main component file for the doctor's profile.
  - `images/`: Stores images used for the profile and other sections.
  - `index.css`: Contains all the styles for the component.

## Dependencies

- `react`
- `react-icons`

Make sure to include the images (e.g., `profile.png`, `womenshealth.png`, `review.png`) in the `public/images` folder to ensure they display correctly in the component.

## Customization

- **Change Doctor Details**: Modify the doctor's name, profile image, specialization, etc., directly in the component's JSX.
- **Update Appointment Fee**: Change the fee by editing the value in the `price-section`.
- **Add More Time Slots**: Modify the `time-section` arrays to include additional time slots for appointments.


