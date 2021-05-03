import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1443Component } from './test-component1443.component';

describe('TestComponent1443Component', () => {
  let component: TestComponent1443Component;
  let fixture: ComponentFixture<TestComponent1443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1443Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
