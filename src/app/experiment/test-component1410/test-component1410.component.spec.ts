import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1410Component } from './test-component1410.component';

describe('TestComponent1410Component', () => {
  let component: TestComponent1410Component;
  let fixture: ComponentFixture<TestComponent1410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
