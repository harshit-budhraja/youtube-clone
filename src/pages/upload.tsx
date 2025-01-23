import { Heading, Progress, useDisclosure, VStack } from "@chakra-ui/react";
import {
  createField,
  Field,
  Form,
  FormLayout,
  SubmitButton,
} from "@saas-ui/react";
import { IKUpload } from "imagekitio-next";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const UploadField = createField(IKUpload, {
  isControlled: true,
});

export default function Upload() {
  const [progress, setProgress] =
    useState<ProgressEvent<XMLHttpRequestEventTarget> | null>(null);

  const {
    isOpen: isUploading,
    onOpen: onUploading,
    onClose: onUploaded,
  } = useDisclosure();

  const uploadRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  return (
    <VStack px="12" py="6">
      <Heading as="h1" size="md" mb="8" textAlign="center">
        Upload new video
      </Heading>
      <Form
        w="80%"
        defaultValues={{
          title: "",
          description: "",
        }}
        onSubmit={async () => {
          uploadRef.current?.click();
        }}
      >
        {(form) => (
          <FormLayout>
            <Field
              name="title"
              label="Title"
              type="text"
              placeholder="Title of your video"
              rules={{ required: true }}
            />

            <Field
              name="description"
              type="textarea"
              label="Description"
              placeholder="Description of your video"
              rules={{
                required: true,
              }}
            />

            {
              /**
               * TODO:
               * Add useUniqueFileName to true
               * Add customMetadata to include Title and Description
               * Add folder to /YoutubeClone
               * Add onUploadProgress to setProgress
               * Add onUploadStart to onUploading
               * Add onSuccess to onUploaded, alert "Video uploaded successfully!" and router.push to /
               */
            }
            {
              /**
               * TODO:
               * For ABS,
               * add post transformation
               * {{ post: [{ type: "abs", protocol: "hls", value: "sr-240_360_480_720_1080" }] }}
               */
            }
            {/* <UploadField
              name="file"
              hidden
              accept="video/*"
              ref={uploadRef}
            /> */}

            {/* <SubmitButton isLoading={isUploading} loadingText="Uploading...">
              Select File and Upload
            </SubmitButton>
            {progress ? (
              <Progress
                value={progress ? (progress.loaded / progress.total) * 100 : 0}
              />
            ) : null} */}
          </FormLayout>
        )}
      </Form>
    </VStack>
  );
}
