/**
 * @license
 * Copyright (C) 2018 Julian Reschke
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Registers a language handler for IETF ABNF, as specified in RFC 5234,
 * and extended in RFCs 7230 (list production) and 7405 (%s and %i).
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         // comment
         [PR['PR_COMMENT'], /^;[^\x00-\x1f]*/, null, ";"],
        ],
        [
         // string literals
         [PR['PR_STRING'], /^(\%s|\%i)?"[^"\x00-\x1f]*"/, null],
         // binary literals
         [PR['PR_LITERAL'], /^\%b[01]+((-[01]+)|(\.[01]+)*)/, null],
         // decimal literals
         [PR['PR_LITERAL'], /^\%d[0-9]+((-[0-9]+)|(\.[0-9]+)*)/, null],
         // hex literals
         [PR['PR_LITERAL'], /^(\%x[A-Za-z0-9]+((-[A-Za-z0-9]+)|(\.[A-Za-z0-9]+)*))/, null],
         // prose rule
         [PR['PR_NOCODE'], /^<[^>\x00-\x1f]*>/, null],
         // rule name
         [PR['PR_TYPE'], /^([A-Za-z][A-Za-z0-9-]*)/, null],
         [PR['PR_PUNCTUATION'], /^[=\(\)\*\/\[\]#]/, null],
        ]),
    ['ietf_abnf']);
