import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1460Component } from './test-component1460.component';

describe('TestComponent1460Component', () => {
  let component: TestComponent1460Component;
  let fixture: ComponentFixture<TestComponent1460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1460Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
