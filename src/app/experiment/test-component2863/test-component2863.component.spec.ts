import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2863Component } from './test-component2863.component';

describe('TestComponent2863Component', () => {
  let component: TestComponent2863Component;
  let fixture: ComponentFixture<TestComponent2863Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2863Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
