import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1029Component } from './test-component1029.component';

describe('TestComponent1029Component', () => {
  let component: TestComponent1029Component;
  let fixture: ComponentFixture<TestComponent1029Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1029Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
