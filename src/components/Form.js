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

            <FormGroup controlId="city">
                <Col sm={3}>
                    Город:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Город"  defaultValue={def('city')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="responsible">
                <Col sm={3}>
                    Доставщик:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Доставщик"  defaultValue={def('responsible')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="address">
                <Col sm={3}>
                    Адрес:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Адрес"  defaultValue={def('address')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="phone">
                <Col sm={3}>
                    Телефон:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Телефон"  defaultValue={def('phone')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="order">
                <Col sm={3}>
                    Мебель:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Мебель"  defaultValue={def('order')} inputRef={ref => options.push(ref)}/>
                </Col>
            </FormGroup>


            <FormGroup controlId="comment">
                <Col sm={3}>
                    Комментарий:
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Комментарий"  defaultValue={def('comment')} inputRef={ref => options.push(ref)}/>
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