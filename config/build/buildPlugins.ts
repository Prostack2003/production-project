import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import * as webpack from "webpack";
import {BuildOptions, BuildPaths} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}