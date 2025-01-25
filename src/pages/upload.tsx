import { Heading, Progress, useDisclosure, VStack } from "@chakra-ui/react";
import {
  createField,
  Field,
  Form,
  FormLayout,
  SubmitButton,
} from "@saas-ui/react";
import { IKUpload as IKUploadComponent } from "imagekitio-next";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const IKUpload = createField(IKUploadComponent, {
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
               * 
               * For ABS,
               * add post transformation prop
               * {{ post: [{ type: "abs", protocol: "hls", value: "sr-240_360_480_720_1080" }] }}
               */
            }
            {/* <IKUpload
              name="file"
              hidden
              accept="video/*"
              ref={uploadRef}
              // useUniqueFileName={true}
              // folder="/YoutubeClone"
              // customMetadata={{
              //   Title: form.getValues().title,
              //   Description: form.getValues().description,
              // }}
              onUploadStart={() => {
                onUploading();
              }}
              onUploadProgress={setProgress}
              onSuccess={() => {
                onUploaded();
                alert("Video uploaded successfully!");
                router.push("/");
              }}
              // transformation={{
              //   post: [{ type: "abs", protocol: "hls", value: "sr-240_360_480_720_1080" }]
              // }}
            /> */}

            {/* <SubmitButton isLoading={isUploading} loadingText="Uploading...">
              Select File and Upload
            </SubmitButton> */}
            {progress ? (
              <Progress
                value={progress ? (progress.loaded / progress.total) * 100 : 0}
              />
            ) : null}
          </FormLayout>
        )}
      </Form>
    </VStack>
  );
}
