import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2640Component } from './test-component2640.component';

describe('TestComponent2640Component', () => {
  let component: TestComponent2640Component;
  let fixture: ComponentFixture<TestComponent2640Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2640Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
