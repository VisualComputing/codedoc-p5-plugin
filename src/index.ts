import { ConfigOverride } from '@codedoc/core';

import { P5 } from './components';

/*
export interface CodingBlogPluginOptions {
  assets?: string[];
}

export function codingBlog(options?: CodingBlogPluginOptions) {
  return function(): ConfigOverride {
    return {
      markdown: {
        customComponents:  {
          P5
        }
      },
      misc: {
        coding_blog: {
          assets: options?.assets || []
        }
      }
    }
  }
}
// */

/*
export function codingBlog() {
  return function(): ConfigOverride {
    return {
      markdown: {
        customComponents:  {
          P5
        }
      },
    }
  }
}
// */

//var repository: string;

// /*
export function p5Plugin(/* repo: string */) {
  //repository = repo;
  return function(): ConfigOverride {
    return {
      markdown: {
        //customComponents: { ...DefaultConfig.markdown.customComponents, P5 }
        customComponents: { P5 }
      }
    }
  }
}
// */

/*
export function p5Plugin(): ConfigOverride {
  return {
    markdown: {
      //customComponents: { ...DefaultConfig.markdown.customComponents, P5 }
      customComponents: { P5 }
    }
  }
}
// */
