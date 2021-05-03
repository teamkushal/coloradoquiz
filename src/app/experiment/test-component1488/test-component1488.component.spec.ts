import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1488Component } from './test-component1488.component';

describe('TestComponent1488Component', () => {
  let component: TestComponent1488Component;
  let fixture: ComponentFixture<TestComponent1488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1488Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
