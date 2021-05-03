import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2886Component } from './test-component2886.component';

describe('TestComponent2886Component', () => {
  let component: TestComponent2886Component;
  let fixture: ComponentFixture<TestComponent2886Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2886Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
