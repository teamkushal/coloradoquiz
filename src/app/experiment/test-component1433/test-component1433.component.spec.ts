import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1433Component } from './test-component1433.component';

describe('TestComponent1433Component', () => {
  let component: TestComponent1433Component;
  let fixture: ComponentFixture<TestComponent1433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1433Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
