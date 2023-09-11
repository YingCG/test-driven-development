import Unsplash from "./Unsplash";
import mockAxios from "axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

it("calls axios and returns images", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        data: { results: ["cat.jpg"] }
      })
    })
  );

  const {getByTestId} = render(<Unsplash />);

  await waitFor(() => {
    const imageNameNode = getByTestId('imageName');
    expect(imageNameNode.textContent).toBe("cat.jpg");
  });
});
