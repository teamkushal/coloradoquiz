import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1404Component } from './test-component1404.component';

describe('TestComponent1404Component', () => {
  let component: TestComponent1404Component;
  let fixture: ComponentFixture<TestComponent1404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
