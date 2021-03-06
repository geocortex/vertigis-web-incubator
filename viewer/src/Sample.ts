export default interface Sample {
    /** The JSON object representing the app config. */
    app: string;
    /** The path to the layout file. */
    layout: string;
    /** The path to the custom library JavaScript bundle. */
    library: string;
    /** The id of the sample. This will be the sample folder name. */
    id: string;
    /** The path to the optional custom HTML parent page. */
    parentPage: string;
    /** The path to the readme of the sample. */
    readme: string;
    /** The absolute URL to the base path of this sample in the repository. */
    repositoryBasePath: string;
}
