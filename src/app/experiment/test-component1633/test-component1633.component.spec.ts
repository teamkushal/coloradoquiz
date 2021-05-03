import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1633Component } from './test-component1633.component';

describe('TestComponent1633Component', () => {
  let component: TestComponent1633Component;
  let fixture: ComponentFixture<TestComponent1633Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1633Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
