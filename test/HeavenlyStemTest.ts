import {suite, test} from '@testdeck/mocha';
import {HeavenStem} from '../lib';
import {equal} from 'assert';

@suite
class HeavenlyStemTest {
    @test
    test() {
        equal(HeavenStem.fromIndex(0).getName(), '甲');
    }

    @test
    test1() {
        equal(HeavenStem.fromName('甲').getIndex(), 0);
    }

    @test
    test2() {
        equal(HeavenStem.fromName('甲').getElement().getReinforce().getName(), HeavenStem.fromName('丙').getElement().getName());
    }

    @test
    test3() {
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('甲')).getName(), '比肩');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('乙')).getName(), '劫财');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('丙')).getName(), '食神');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('丁')).getName(), '伤官');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('戊')).getName(), '偏财');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('己')).getName(), '正财');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('庚')).getName(), '七杀');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('辛')).getName(), '正官');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('壬')).getName(), '偏印');
        equal(HeavenStem.fromName('甲').getTenStar(HeavenStem.fromName('癸')).getName(), '正印');
    }

}
