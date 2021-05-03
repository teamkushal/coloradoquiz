import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1055Component } from './test-component1055.component';

describe('TestComponent1055Component', () => {
  let component: TestComponent1055Component;
  let fixture: ComponentFixture<TestComponent1055Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1055Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
