import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1376Component } from './test-component1376.component';

describe('TestComponent1376Component', () => {
  let component: TestComponent1376Component;
  let fixture: ComponentFixture<TestComponent1376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1376Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
