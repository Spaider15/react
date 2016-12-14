/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/10/2016.
 */
import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, Checkbox } from 'react-bootstrap';
export default ({submit, defaults = {}}) => {
    const now = () => {
        if( defaults.date ) return defaults.date;
        const d = new Date();
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    };

    const def = (id) => {
        return defaults[id] || ''
    };

    const options = [];
    return(
        <Form horizontal>
            <FormGroup controlId="date">
                <Col sm={3}>
                    Дата:
                </Col>
                <Col sm={9}>
                    <FormControl type="date" placeholder="Дата" defaultValue={now()} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="route">
                <Col sm={3}>
                    Маршрутный №:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Маршрутный №"  defaultValue={def('route')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="stk">
                <Col sm={3}>
                    СТК:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="СТК"  defaultValue={def('stk')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="city">
                <Col sm={3}>
                    Направление:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Направление"  defaultValue={def('city')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="responsible">
                <Col sm={3}>
                    Отвественный:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Отвественный"  defaultValue={def('responsible')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="price">
                <Col sm={3}>
                    Сумма:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Сумма"  defaultValue={def('price')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="stock">
                <Col sm={3}>
                    Акция:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Акция"  defaultValue={def('stock')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="percent">
                <Col sm={3}>
                    Проценты:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Проценты"  defaultValue={def('percent')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="operator">
                <Col sm={3}>
                    Диспетчерские:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Диспетчерские"  defaultValue={def('operator')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="amount">
                <Col sm={3}>
                    Итого:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Итого"  defaultValue={def('amount')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="note">
                <Col sm={3}>
                    Комментарий:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Комментарий"  defaultValue={def('note')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col sm={3}>
                    Долг:
                </Col>
                <Col sm={9}>
                    <Checkbox id='closed' inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={7} sm={5}>
                    <Button type="submit" onClick={(e) => submit(e, options)}>
                        Создать
                    </Button>
                    {'  '}
                    <Button type="reset">
                        Отменить
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    )
}