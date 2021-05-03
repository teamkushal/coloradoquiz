import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1389Component } from './test-component1389.component';

describe('TestComponent1389Component', () => {
  let component: TestComponent1389Component;
  let fixture: ComponentFixture<TestComponent1389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1389Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
