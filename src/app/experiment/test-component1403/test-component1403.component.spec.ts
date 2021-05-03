import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1403Component } from './test-component1403.component';

describe('TestComponent1403Component', () => {
  let component: TestComponent1403Component;
  let fixture: ComponentFixture<TestComponent1403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
