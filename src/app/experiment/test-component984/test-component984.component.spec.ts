import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent984Component } from './test-component984.component';

describe('TestComponent984Component', () => {
  let component: TestComponent984Component;
  let fixture: ComponentFixture<TestComponent984Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent984Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
