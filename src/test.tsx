import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import App from './App'

const mockSliderTestId = 'slider-input';

jest.mock('@mui/material/Slider', () => (props: any) => {
  const { id, name, min, max, onChange } = props;
  return (
    <input
      data-testid={mockSliderTestId}
      type='range'
      id={id}
      name={name}
      min={min}
      max={max}
      onChange={event =>
        onChange && onChange(event, parseInt(event.target.value))
      }
    />
  );
});

const defaultFile = new File(['file'], 'file.png', { type: 'image/png' });

const expectRenderInsertImageComponent = () => {
  const insertImageText = screen.getByLabelText('Upload Avatar');
  expect(insertImageText).toBeInTheDocument();
};

const expectRenderCropAndSaveImageComponent = () => {
  const slider = screen.getByTestId(mockSliderTestId);
  expect(slider).toBeInTheDocument();

  const saveButton = screen.getByText('Save');
  expect(saveButton).toBeInTheDocument();
};

const expectRenderUploadFailedComponent = () => {
  const errorMessage = screen.getByText('Sorry, the upload failed.');
  expect(errorMessage).toBeInTheDocument();
};

const changeFileInput = (file = defaultFile) => {
  const input = screen.getByTestId('input-file');
  fireEvent.change(input, { target: { files: [file] } });
  fireEvent.input(input);
};

describe('<App />', () => {
  beforeEach(() => {
    window.URL.createObjectURL = jest.fn();

    render(<App />);
  });

  describe('Behaviour', () => {
    it('renders the component', () => {
      const { container } = render(<App />);

      expect(container).toBeInTheDocument();
    });

    it('changes the component when image file is uploaded', () => {
      expectRenderInsertImageComponent();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();
    });

    it('shows component error when file type dont match', () => {
      const incorrectFile = new File(['file'], 'file.mp3', {
        type: 'image/mp3',
      });

      changeFileInput(incorrectFile);

      expectRenderUploadFailedComponent();
    });


    it('reset the component after clicking on try again if has error', () => {
      const incorrectFile = new File(['file'], 'file.mp3', {
        type: 'image/mp3',
      });

      changeFileInput(incorrectFile);

      expectRenderUploadFailedComponent();

      const tryAgain = screen.getByLabelText('Try Again');
      fireEvent.click(tryAgain);

      expectRenderInsertImageComponent();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();
    });

    it('if success, render the initial component', () => {
      changeFileInput();

      expectRenderCropAndSaveImageComponent();

      const Close = screen.getByLabelText('Close');
      fireEvent.click(Close);

      const insertImageText2 = screen.getByLabelText('Upload Avatar');
      expect(insertImageText2).toBeInTheDocument();
    });

    it('testing mui slider function', () => {
      changeFileInput();

      expectRenderCropAndSaveImageComponent();

      const image = screen.getByLabelText('Avatar');

      expect(image.style.transform).toBe('scale(1)');

      const slider = screen.getByTestId(mockSliderTestId);

      fireEvent.change(slider, {
        target: { value: 5 },
      });

      expect(image.style.transform).toBe('scale(1.5)');
    });

    it('display saved zoom after click on save button', () => {
      expectRenderInsertImageComponent();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();

      const image = screen.getByLabelText('Avatar');

      expect(image.style.transform).toBe('scale(1)');

      const slider = screen.getByTestId(mockSliderTestId);

      fireEvent.change(slider, {
        target: { value: 5 },
      });

      expect(image.style.transform).toBe('scale(1.5)');

      const saveButton = screen.getByText('Save');

      fireEvent.click(saveButton);

      expect(image.style.transform).toBe('scale(1.5)');

      const insertImageText = screen.getByLabelText('Upload Avatar');
      expect(insertImageText).toBeInTheDocument();

      const image2 = screen.getByLabelText('Avatar');

      expect(image2.style.transform).toBe('scale(1.5)');
    });
  });
});