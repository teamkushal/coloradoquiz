import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2757Component } from './test-component2757.component';

describe('TestComponent2757Component', () => {
  let component: TestComponent2757Component;
  let fixture: ComponentFixture<TestComponent2757Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2757Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
