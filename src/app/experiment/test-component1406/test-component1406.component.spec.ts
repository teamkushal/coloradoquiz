import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1406Component } from './test-component1406.component';

describe('TestComponent1406Component', () => {
  let component: TestComponent1406Component;
  let fixture: ComponentFixture<TestComponent1406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1406Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
