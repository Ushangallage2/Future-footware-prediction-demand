import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BackgroundVideoPage from "./BackgroundVideoPage";
import axios from "axios";

// Mock axios
jest.mock("axios");

const mockUserData = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  address: "123 Main St",
  departmentRole: "Engineering",
};

// Setup a global fetch mock
beforeEach(() => {
  localStorage.setItem("token", "mock-token");
  axios.get.mockResolvedValue({ data: mockUserData });
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUserData),
      blob: () =>
        Promise.resolve(new Blob(["dummy image data"], { type: "image/jpeg" })),
    })
  );
});

afterEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe("BackgroundVideoPage Component", () => {
  test("renders user data after loading", async () => {
    render(<BackgroundVideoPage />);

    await waitFor(() => {
      expect(screen.getByText(mockUserData.firstName)).toBeInTheDocument();
      expect(screen.getByText(mockUserData.lastName)).toBeInTheDocument();
      expect(screen.getByText(mockUserData.email)).toBeInTheDocument();
    });
  });

  test("toggles note visibility when button is clicked", async () => {
    render(<BackgroundVideoPage />);

    const toggleNoteButton = screen.getByRole("button", { name: /important/i });
    fireEvent.click(toggleNoteButton);

    await waitFor(() => {
      expect(screen.getByText(/add your note content here/i)).toBeVisible();
    });
  });

  test("updates profile picture when a new image is uploaded", async () => {
    render(<BackgroundVideoPage />);

    const fileInput = screen.getByLabelText(/📷/i);
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });

    axios.post.mockResolvedValue({
      status: 200,
      data: { path: "path/to/image" },
    });

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    const profileImage = screen.getByAltText("Profile Picture");
    expect(profileImage).toHaveAttribute(
      "src",
      expect.stringContaining("blob")
    );
  });

  test("saves user data after edit", async () => {
    render(<BackgroundVideoPage />);

    const editFirstNameButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editFirstNameButton);

    const firstNameInput = screen.getByDisplayValue(mockUserData.firstName);
    fireEvent.change(firstNameInput, { target: { value: "Jane" } });

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    axios.put.mockResolvedValue({ status: 200 });

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(
        expect.stringContaining(`/user/editProfile/${mockUserData.id}`),
        expect.objectContaining({
          firstName: "Jane",
        })
      );
    });

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2); // Once for initial load, once after save
    });
  });
});
