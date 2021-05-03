import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2515Component } from './test-component2515.component';

describe('TestComponent2515Component', () => {
  let component: TestComponent2515Component;
  let fixture: ComponentFixture<TestComponent2515Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2515Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
