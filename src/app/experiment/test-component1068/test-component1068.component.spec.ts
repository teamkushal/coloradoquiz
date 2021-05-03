import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1068Component } from './test-component1068.component';

describe('TestComponent1068Component', () => {
  let component: TestComponent1068Component;
  let fixture: ComponentFixture<TestComponent1068Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1068Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
