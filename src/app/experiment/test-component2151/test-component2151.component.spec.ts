import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2151Component } from './test-component2151.component';

describe('TestComponent2151Component', () => {
  let component: TestComponent2151Component;
  let fixture: ComponentFixture<TestComponent2151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
