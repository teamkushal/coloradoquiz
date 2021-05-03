import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1015Component } from './test-component1015.component';

describe('TestComponent1015Component', () => {
  let component: TestComponent1015Component;
  let fixture: ComponentFixture<TestComponent1015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
