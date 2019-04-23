import AnswerModel from "./answerModel";
import JsendSerializer from '../../util/JsendSerializer';
import httpErrorCodes from '../../util/httpErrorCodes';

class AnswerController {
    /**
     * @api {post} /answers/ Create an Answer
     * @apiName answers/
     * @apiVersion 1.0.0
     * @apiGroup Answers
     *
     *
     * @apiSuccess {String} Response Answers registered successfully!
     *
     *
     * @apiError {String} Response An internal Server error has occured!
     *
     *
     * @apiparam {String} question Question ID to assign relationship and link to its answer
     * @apiparam {String} owner Generated from Auth Token in Authorization Header
     * @apiparam {String} text The selected option from the user
     * @apiparam {String} created Generated by Server
     */


    async createAnswer(req, res, next) {
        try {
            const Answer = await AnswerModel.Answer.create(req.body);
            return res.status(httpErrorCodes.OK).json(JsendSerializer.success('Answer created!', Answer, 201));
        } catch (err) {
            console.log(err)
            return res.status(httpErrorCodes.INTERNAL_SERVER_ERROR).json(JsendSerializer.fail('An internal Server error has occured!', err, 500));
        }
    }
}
export default new AnswerController();