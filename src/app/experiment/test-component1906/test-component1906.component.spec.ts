import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1906Component } from './test-component1906.component';

describe('TestComponent1906Component', () => {
  let component: TestComponent1906Component;
  let fixture: ComponentFixture<TestComponent1906Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1906Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
