import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2334Component } from './test-component2334.component';

describe('TestComponent2334Component', () => {
  let component: TestComponent2334Component;
  let fixture: ComponentFixture<TestComponent2334Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2334Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
